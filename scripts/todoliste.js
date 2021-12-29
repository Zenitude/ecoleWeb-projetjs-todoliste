// Variables

    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');
    const liste = document.querySelector('ul');

// Événement

    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();

        ajouterListe(input.value);

        input.value = "";

    });

    function ajouterListe(infos)
    {
        let random = Math.random();

        /* Création des lignes de la liste */
        let li = document.createElement('li'); 
        li.setAttribute('data-key', `${random}`);
        li.classList.add('ligne');       

        /* Case à cocher */
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', `${random}`);
        checkBox.addEventListener('click', checkPourBarrer);
        li.appendChild(checkBox);

        /* Action */
        let checkLabel = document.createElement('label');
        checkLabel.setAttribute('for', `${random}`);
        checkLabel.innerText = infos;
        li.appendChild(checkLabel);

        /* Bouton de suppression */
        let btnSupprimer = document.createElement('button');
        btnSupprimer.classList.add('btn-suppression');
        let imgBtnSupprimer = document.createElement('img');
        imgBtnSupprimer.setAttribute('src', 'ressources/fermer.svg');
        btnSupprimer.appendChild(imgBtnSupprimer);
        btnSupprimer.addEventListener('click', supprimerDeLaListe);
        li.appendChild(btnSupprimer);

        /* Ajout à la liste */
        liste.appendChild(li);
    }

    function checkPourBarrer(e)
    {      
        e.target.parentNode.classList.toggle('barrer-ligne');
    }

    function supprimerDeLaListe(e)
    {
        e.preventDefault();

        e.target.parentNode.parentNode.remove();
    }