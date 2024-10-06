function turnIntoVersaler(inputText){ 

    return inputText.toUpperCase(); 
    
    } 
    
    
    describe("Simple test suite", () => { 
    
    test("test case 1", () => { 
    
    const inputText = "hej"; 
    
    const expectedOutput = "HEJ"; 
    
     
    
    expect(turnIntoVersaler(inputText)).toBe(expectedOutput); 
    
    }); 
    
    }); 