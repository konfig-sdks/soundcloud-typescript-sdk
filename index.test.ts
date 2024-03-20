import { SoundCloud } from "./index";

describe("soundcloud-typescript-sdk", () => {
    it("initialize client", async () => {
        const soundcloud = new SoundCloud({
            apiKey: "API_KEY",
        });
    });
});
