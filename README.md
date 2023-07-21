# AangularNnodejs

1. Créer une application angular avec routing, faire un component Home et l'assigner à la route par défaut, supprimer tout ce qu'il y a dans le app.component.html sauf le router-outlet, créer le environment.ts avec un serverUrl dedans, Rajouter le link du css de bootstrap dans le index.html, modifier le tsconfig.json pour y ajouter le :
"strictPropertyInitialization": false,
	
2. Copier-coller le fichier entities.ts du back vers le front
	
3. Générer un PersonService avec un fetchAll(), un delete(person:Person) et un post(person:Person)  dedans
	
4. Générer un PersonItemComponent avec un @Input Person dedans et y afficher la person sous forme de card à l'intérieur
	
5. Dans le HomeComponent, appeler le fetchAll du service et boucler sur le résultat dans le template pour afficher un app-person-item par résultat
	
6. Rajouter une variable selected:Person|null  dans le HomeComponent et créer une fonction select(person:Person) qui va vérifier si person == selected, si oui on met null dans selected, sinon on met person dans selected
	
7. Avec un ngStyle ou un ngClass modifier l'apparence du app-person-item dont la person correspond à selected
	
8. Rajouter une méthode removeSelected dans le HomeComponent qui va lancer la méthode delete du service puis retirer la person supprimée de la liste et remettre selected à null
	
9. Rajouter un bouton dans le template qui ne s'affichera que si selected contient quelque chose et qui au click déclenchera le removeSelected

__________________
## Formulaire d'ajout
	
1. Créer un nouveau component AddPersonComponent et le lier à la route /add-person
	
2. Dans ce component, créer un formulaire html (avec du bootstrap pour que ça soit joli) et lier les champs du formulaire à un objet Person dans le component
	
3. Rajouter le service et le router dans le constructeur du component et faire qu'au submit du formulaire ça déclenche le add avant de faire une redirection vers la page d'accueil

 #  Bonus : Dans le HomeComponent faire de la multiselection
 

 __________________
 ## Quality of life

1. Créer un NotFoundComponent avec dedans juste un message qui indique que la page n'a pas été trouvé (bonus : afficher l'url actuelle dans la page)
	
2. Dans le app-routing.module rajouter une route wildcard (je vous laisse chercher sur internet comment on fait) qui pointera sur le NotFoundComponent
	
3. Tester en allant sur une url qui n'existe pas (donc n'importe quoi d'autre que / ou /add-person