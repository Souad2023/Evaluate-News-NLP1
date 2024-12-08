import { checkForName } from "../src/client/js/nameChecker";
global.alert = jest.fn();

describe("Testing name validation", () => {
    test("checkForName should show 'Welcome, Captain!' for valid names", () => {
        checkForName("Picard");
        expect(alert).toHaveBeenCalledWith("Welcome, Captain!"); 
    });

    test("checkForName should show 'Enter a valid captain name' for invalid names", () => {
        checkForName("Janeway");
        expect(alert).toHaveBeenCalledWith("Enter a valid captain name"); 
    });

    test("checkForName should show 'Enter a valid captain name' for empty names", () => {
        checkForName("Kirk");
        expect(alert).toHaveBeenCalledWith("Enter a valid captain name");
    });
    test("checkForName should show 'Enter a valid captain name' for empty names", () => {
        checkForName("Archer");
        expect(alert).toHaveBeenCalledWith("Enter a valid captain name");
    });
    test("checkForName should show 'Enter a valid captain name' for empty names", () => {
        checkForName("Georgiou");
        expect(alert).toHaveBeenCalledWith("Enter a valid captain name");
    });
});
