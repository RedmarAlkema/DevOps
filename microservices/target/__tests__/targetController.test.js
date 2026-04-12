jest.mock("../models/Target", () =>
  jest.fn(function MockTarget(data) {
    Object.assign(this, data);
  })
);

const Target = require("../models/Target");
const { getTargetFromRequest } = require("../controllers/targetController");

describe("targetController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getTargetFromRequest bouwt een Target-document op uit requestdata", async () => {
    const req = {
      files: [
        {
          buffer: Buffer.from("png-bytes"),
          mimetype: "image/png"
        }
      ],
      body: {
        title: "Doelwit",
        location: "Leeuwarden",
        description: "Test target",
        radius: 25,
        deadline: "2026-04-20T12:00:00.000Z"
      },
      user: {
        userId: "admin-user"
      }
    };

    const target = await getTargetFromRequest(req);

    expect(Target).toHaveBeenCalledTimes(1);
    expect(target.title).toBe("Doelwit");
    expect(target.location).toBe("Leeuwarden");
    expect(target.description).toBe("Test target");
    expect(target.radius).toBe(25);
    expect(target.deadline).toBe("2026-04-20T12:00:00.000Z");
    expect(target.ownerId).toBe("admin-user");
    expect(target.img).toEqual({
      data: Buffer.from("png-bytes"),
      contentType: "image/png"
    });
    expect(target.targetId).toBeDefined();
  });
});
