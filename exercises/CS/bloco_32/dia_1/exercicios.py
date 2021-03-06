import math

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def bigNumber(n1, n2):
    if n1 < n2:
        return n2
    elif n1 > n2:
        return n1
    else:
        return "Os números são iguais"


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    sum = 0
    for i in list:
        sum += i
    return sum / len(list)

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def square(n):
    for i in range(n):
        acc = ''
        for j in range(n):
            acc += '*'
            if j == n - 1:
                print(acc)

        
def draw_square(n):
    for row in range(n):
        print(n * '*')


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
def biggest_name(list):
    biggest = list[0]
    for i in list:
        if len(biggest) < len(i):
            biggest = i
    return biggest


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).
def get_total(wall_size):
    total = math.ceil(wall_size / 3)
    liter = 18
    price = 80
    total_liters = math.ceil(total / liter)
    total_price = total_liters * price
    return (total_liters, total_price)


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
def test_sides_triangle(s1, s2, s3):
    if s1 + s2 < s3 or s1 + s3 < s2 or s2 + s3 < s1:
        return "Não é triângulo"
    elif s1 == s2 == s3:
        return "Equilátero"
    elif s1 == s2 or s1 == s3 or s2 == s3:
        return "Isósceles"
    else:
        return "Escaleno"


# bonus:

# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .
def smallest_number(list):
    smallest = list[0]
    for i in list:
        if i < smallest:
            smallest = i
    return smallest


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:
def print_triangle(n):
    for i in range(n):
        print((i + 1) * '*')


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor esperado será 15 .
def sum_numbers(n):
    sum = 0
    for i in range(n):
        sum += i + 1
    return sum


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
  # Álcool:
  #   - Até 20 litros, desconto de 3% por litro;
  #   - Acima de 20 litros, desconto de 5% por litro.
  # Gasolina:
  #   - Até 20 litros, desconto de 4% por litro;
  #   - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.
def price_gasoline(liters, type):
    if type == 'A':
        price = liters * 1.90
        if (liters > 20):
            price -= price * 0.05
        else:
            price -= price * 0.03
    else:
        price = liters * 2.50
        if (liters > 20):
            price -= price * 0.06
        else:
            price -= price * 0.04

    return price

