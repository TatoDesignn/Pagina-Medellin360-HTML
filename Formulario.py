

Cultural = ["Parque de los pies descalzos", "Parque de las luces", "El hueco", "Palacio Nacional"]
comida = ["Taquería Cuernavaca Centro", "El Llanerito Centro", "Restaurante Hato viejo", "Zuma Restaurante"]
Museos = ["El museo del agua", "Museo de Antioquia", "Museo X", "Museo Y"]

print("\nBienvenido, contesta estre breve formulario.\n")

nombre = input("Cual es tu nombre: ").title().strip()
gusto = input(f"\n¿{nombre} que te gusta mas?\n1.Gastronomico\n2.Museos\n3.Cultural\n\nR//= ").lower().strip()



while gusto != "museos" and gusto != "cultural" and gusto != "gastronomico":
    print("\nEl dato introducido no es correcto, copia una de las tres opciones.")
    gusto = input("R//=").lower().strip()
    break

def Indenticador():
    if(gusto == "museos" or gusto == "2"):
        print(f"\n{nombre} hemos analizado que tus gustos son dirigidos hacia los museos.")
        print("Te recomendamos estas rutas: ")
        for m in Museos:
            print(f"-{m}")  
        
    elif(gusto == "gastronomico" or gusto == "1"):
        print(f"\n{nombre} hemos analizado que tus gustos son dirigidos hacia la gastronomia.")
        print("Te recomendamos estas rutas: ")
        for g in comida:
            print(f"-{g}")
        
    elif(gusto == "cultural" or gusto == "3"):
        print(f"\n{nombre} hemos analizado que tus gustos son dirigidos hacia lo cultural.")
        print("Te recomendamos estas rutas: ")
        for c in Cultural:
            print(f"-{c}")

Indenticador()