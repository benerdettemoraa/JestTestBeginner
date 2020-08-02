const sum = require('./sum');

//matchers
test('adds 1 + 2 to equal 3',() => 
{
    expect(sum(1,2)).toBe(3);
}); 

test('adds 2 plus 2 is  equal 4',() => 
{
    expect(2 + 2).toBe(4);
});
//numbers
test('two plus three', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
//strings
test('there is no i in MORAA', () =>{
    expect('MORAA').not.toMatch(/i/);
});

test('there is i in sabina', () =>{
    expect('sabina').toMatch(/i/);
});
//arrays
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
   'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    //expect(new Set(shoppingList)).toContain('beer');
  });

