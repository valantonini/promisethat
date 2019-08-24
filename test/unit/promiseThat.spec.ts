import promiseThat from "@/index";
import { expect } from "chai";

describe("Promise that", () => {
  it("should return a correctly resolving promise",  (done) => {
    const data = {
      myData: "myValue",
    };

    promiseThat
      .resolvesWith(data)
      .then( (response: any) => {
        expect(response.myData).to.equal("myValue");
        done();
      });
  });

  it("should return a correct rejection",  (done) => {
    const data = {
      myData: "myValue",
    };

    promiseThat
      .rejectsWith(data)
      .then( (response: any) => {
        // never executed
      })
      .catch( (error: any) => {
        expect(error.myData).to.equal("myValue");
        done();
      });
  });
});
