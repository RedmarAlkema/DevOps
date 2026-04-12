jest.mock("../models/upload", () =>
  jest.fn(function MockUpload(data) {
    Object.assign(this, data);
  })
);

const Upload = require("../models/upload");
const { getUploadFromRequest } = require("../controllers/uploadController");

describe("uploadController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getUploadFromRequest gebruikt de multipart file en requestdata", async () => {
    const req = {
      files: [
        {
          originalname: "upload.png",
          buffer: Buffer.from("upload-bytes"),
          mimetype: "image/png"
        }
      ],
      body: {
        targetId: "target-123",
        contentType: "image/png"
      },
      user: {
        userId: "player-456"
      }
    };

    const upload = await getUploadFromRequest(req);

    expect(Upload).toHaveBeenCalledTimes(1);
    expect(upload.filename).toBe("upload.png");
    expect(upload.userId).toBe("player-456");
    expect(upload.targetId).toBe("target-123");
    expect(upload.contentType).toBe("image/png");
    expect(upload.img).toEqual({
      data: Buffer.from("upload-bytes"),
      contentType: "image/png"
    });
    expect(upload.uploadId).toBeDefined();
  });
});
