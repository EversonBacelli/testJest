

test('Devo conhecer as principais assertivas do jest', () => {
    let number = null

    expect(number).toBeNull();

    number = 10;

    expect(number).not.toBeNull();

    // para tipos primitivos os métodos são identicos
    expect(number).toBe(10);
    expect(number).toEqual(10);

    // maior que
    expect(number).toBeGreaterThan(9);
    
    // menor que
    expect(number).toBeLessThan(50);


});

test("Devo saber trabalhar com objetos", () => {
    const obj = {name: "José", email: "jose@gmail.com"}

    // Se o objeto possui a propriedade name
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('email')

    // verificar a propriedade e seu valor
    expect(obj).toHaveProperty('name', 'José')

    expect(obj.name).toBe('José');

    const obj2 = {name: "José", email: "jose@gmail.com"}
    expect(obj).toEqual(obj2);
});



