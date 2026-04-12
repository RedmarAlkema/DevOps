jest.mock("bcrypt", () => ({
  hash: jest.fn(),
  compare: jest.fn()
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn()
}));

jest.mock("../models/user", () => {
  const MockUser = jest.fn(function MockUser(data) {
    Object.assign(this, data);
    this._id = data._id || "user-123";
    this.save = jest.fn().mockResolvedValue(this);
  });

  MockUser.findOne = jest.fn();
  return MockUser;
});

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authService = require("../services/authService");

describe("authService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_SECRET = "test-secret";
  });

  test("register hasht het wachtwoord en slaat de gebruiker op", async () => {
    bcrypt.hash.mockResolvedValue("hashed-password");

    const result = await authService.register({
      username: "redmar",
      email: "redmar@example.com",
      password: "plain-password",
      role: "admin"
    });

    expect(bcrypt.hash).toHaveBeenCalledWith("plain-password", 10);
    expect(User).toHaveBeenCalledWith({
      username: "redmar",
      email: "redmar@example.com",
      password: "hashed-password",
      role: "admin"
    });
    expect(result.save).toHaveBeenCalled();
    expect(result.password).toBe("hashed-password");
  });

  test("login geeft een JWT terug voor geldige credentials", async () => {
    User.findOne.mockResolvedValue({
      _id: "user-123",
      username: "redmar",
      password: "stored-hash",
      role: "admin"
    });
    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue("signed-token");

    const token = await authService.login({
      username: "redmar",
      password: "plain-password"
    });

    expect(User.findOne).toHaveBeenCalledWith({ username: "redmar" });
    expect(bcrypt.compare).toHaveBeenCalledWith("plain-password", "stored-hash");
    expect(jwt.sign).toHaveBeenCalledWith(
      { userId: "user-123", role: "admin" },
      "test-secret",
      { expiresIn: "1h" }
    );
    expect(token).toBe("signed-token");
  });
});
