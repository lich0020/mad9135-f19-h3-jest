const robot = require('./robot').robot;

describe('Robot module', () => {
    // ARRANGE: setup variables or dependencies.
    // The list of commands that will be sent to the Robot script
    const instructions = [
        "PLACE 1,2,NORTH", 
        "REPORT"
    ];

    // ACT: execute the function to be tested using the control values created above.
    // Calling each of those commands will produce an Array of results
    const result = instructions.map(i => robot.do(i));
    
    // ASSERT: verify that the requirements of your test were met.
    // BUILD YOUR TESTS HERE
    
    // 1. Test that result is an array.
    test('testing that result is an array', async () => {
      expect(result).toHaveLength(2)
        expect(typeof result).toMatch('object')
      })


    // 2. Test that result[1] is of type object.
    test('testing that result is an object', async () => {
        expect(typeof result[1]).toMatch('object')
      })


    describe('Validate report values', () => {
        // Create this variable after checking that type is object.
        const report = result[1]; 

        // 3. Test that report contains the properties: action, x, y, and facing.
        // test('testing that report to contain properties: action, x,y,facing', async () => {
        //   expect(report).toEqual(expect.arrayContaining(['Alice', 'Bob']))
        // }

        // 4. Test that report.x is a number between 0 and 5.
        test('testing that result.x between 0 and 5', async () => {
            expect(report.x).toBeGreaterThanOrEqual(0)
            expect(report.x).toBeLessThanOrEqual(5)
          })
        


        // 5. Test that report.y is a number between 0 and 5.
        test('testing that result.y between 0 and 5', async () => {
            expect(report.y).toBeGreaterThanOrEqual(0)
            expect(report.y).toBeLessThanOrEqual(5)
          })



        // 6. Test that report.facing is one of: NORTH, SOUTH, EAST, or WEST.
        // test('testing that report.facing is one of: NORTH, SOUTH, EAST, WEST', async () => {
        //   expect(report.facing).toEqual([expect.stringContaining('NORTH')])
        //   })

    })
})