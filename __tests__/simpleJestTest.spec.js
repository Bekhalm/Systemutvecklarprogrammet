function mySum(a, b){
return a + b;
}

describe("Simple test suite", () => {


    test("test case 1", () => {


    
        const input1 = 1;
    
        const input2 = 2; 
    
        const expectedResult = 3;

    expect(mySum(input1, input2)).toBe(expectedResult);

});

});