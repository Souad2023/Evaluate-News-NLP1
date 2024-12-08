import { isValidURL } from "../src/client/js/formHandler";

describe("Testing URL validation function", () => {
    test("Valid URL should return true", () => {
        const validURL = "https://api.meaningcloud.com/sentiment-2.1";
        expect(isValidURL(validURL)).toBe(true);
    });

    test("Invalid URL should return false", () => {
        const invalidURL = "htp://invalid-url";
        expect(isValidURL(invalidURL)).toBe(false);
    });

    test("Empty URL should return false", () => {
        const emptyURL = "";
        expect(isValidURL(emptyURL)).toBe(false);
    });
});
