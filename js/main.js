
var config = {
    type : Phaser.AUTO,
    width : 1000, 
    height : 1000, 
    scene: {
        preload: preload,
        create: create,
        update: update
    },
        physics: {
            default: 'arcade',
            arcade: {
                debug:true,
                gravity: { y: 0 },
            }
        }
}

const game = new Phaser.Game(config);

var cursor;
var joueur;
var camera;

function preload(){

    //intégralité des choses qu'on retrouve dans un camps
    this.load.image("tentebleue", "assets/decor/tente_bleue.png")
    this.load.image("tentejaune", "assets/decor/tente_jaune.png")
    this.load.image("tentemauve", "assets/decor/tente_mauve.png")
    this.load.image("tenterouge", "assets/decor/tente_rouge.png")
    this.load.image("pilotibleue", "assets/decor/tentePilotisBleue.png")
    this.load.image("pilotijaune", "assets/decor/tentePilotisJaune.png")
    this.load.image("pilotimauve", "assets/decor/tentePilotisMauve.png")
    this.load.image("pilotirouge", "assets/decor/tentePilotisRouge.png")
    this.load.image("chiotte", "assets/decor/Chiottes.png")
    this.load.image("rondin", "assets/decor/Rondins.png")
    this.load.image("tableafeu" , "assets/decor/tbaf.png")
    this.load.image("chiotteR" , "assets/decor/chiotteR.png")
    this.load.image("chiotteB" , "assets/decor/chiotteB.png")
    this.load.image("chiotteJ" , "assets/decor/chiotteJ.png")
    this.load.image("chiotteM" , "assets/decor/chiotteM.png")
    this.load.image("bassin" , "assets/decor/bassin.png")
    this.load.image("bassinGold" , "assets/decor/bassinGold.png")
    this.load.image("gourde" , "assets/decor/gourde.png")
    this.load.image("gourdeGold" , "assets/decor/gourdeGold.png")










    //animation feu
    this.load.image("fire1", "assets/decor/fire1.png")
    this.load.image("fire2", "assets/decor/fire2.png")
    this.load.image("fire3", "assets/decor/fire3.png")
    this.load.image("fire4", "assets/decor/fire4.png")

    //animation vache
    this.load.image("cow1", "assets/animals/cow1.png")
    this.load.image("cow2", "assets/animals/cow2.png")
    this.load.image("cow3", "assets/animals/cow3.png")
    this.load.image("cow4", "assets/animals/cow4.png")

    //animation chicken
    this.load.image("chicken1", "assets/animals/chicken1.png")
    this.load.image("chicken2", "assets/animals/chicken2.png")
    this.load.image("chicken3", "assets/animals/chicken3.png")
    this.load.image("chicken4", "assets/animals/chicken4.png")

    //animation pig 
    this.load.image("pig1", "assets/animals/pig1.png")
    this.load.image("pig2", "assets/animals/pig2.png")
    this.load.image("pig3", "assets/animals/pig3.png")
    this.load.image("pig4", "assets/animals/pig4.png")

    //background
    this.load.image("background", "assets/perso/background.png")

    //arbre animation 
    this.load.image("tree1", "assets/decor/tree1.png")
    this.load.image("tree2", "assets/decor/tree2.png")
    this.load.image("tree3", "assets/decor/tree3.png")
    this.load.image("tree4", "assets/decor/tree4.png")

    //Animation joueur sur place
    this.load.image("joueur1", "assets/perso/player1.png")
    this.load.image("joueur2", "assets/perso/player2.png")
    this.load.image("joueur3", "assets/perso/player3.png")

    //Animation joueur qui monte
    this.load.image("upjoueur1", "assets/perso/upplayer1.png")
    this.load.image("upjoueur2", "assets/perso/upplayer2.png")
    this.load.image("upjoueur3", "assets/perso/upplayer3.png")
    this.load.image("upjoueur4", "assets/perso/upplayer4.png")
    this.load.image("upjoueur5", "assets/perso/upplayer5.png")
    this.load.image("upjoueur6", "assets/perso/upplayer6.png")

    //Animation joueur qui descend
    this.load.image("downjoueur1", "assets/perso/downplayer1.png")
    this.load.image("downjoueur2", "assets/perso/downplayer2.png")
    this.load.image("downjoueur3", "assets/perso/downplayer3.png")
    this.load.image("downjoueur4", "assets/perso/downplayer4.png")
    this.load.image("downjoueur5", "assets/perso/downplayer5.png")
    this.load.image("downjoueur6", "assets/perso/downplayer6.png")

    //Animation joueur qui va a droite
    this.load.image("rightjoueur1", "assets/perso/rightplayer1.png")
    this.load.image("rightjoueur2", "assets/perso/rightplayer2.png")
    this.load.image("rightjoueur3", "assets/perso/rightplayer3.png")
    this.load.image("rightjoueur4", "assets/perso/rightplayer4.png")
    this.load.image("rightjoueur5", "assets/perso/rightplayer5.png")
    this.load.image("rightjoueur6", "assets/perso/rightplayer6.png")

    //Animation joueur qui va a gauche
    this.load.image("leftjoueur1", "assets/perso/leftplayer1.png")
    this.load.image("leftjoueur2", "assets/perso/leftplayer2.png")
    this.load.image("leftjoueur3", "assets/perso/leftplayer3.png")
    this.load.image("leftjoueur4", "assets/perso/leftplayer4.png")
    this.load.image("leftjoueur5", "assets/perso/leftplayer5.png")
    this.load.image("leftjoueur6", "assets/perso/leftplayer6.png")

}

function create(){

    var block = this.physics.add.image(400, 100, 'block');

    //créer input avec les keyboard
    cursor = this.input.keyboard.createCursorKeys();

    //Background et position
    var backgroundImage = this.add.sprite(0 , 0 ,"background")
    backgroundImage.setPosition(config.width/2, config.height/2)

    //caméra  plus colision sur le bord de la map
    this.cameras.main.setBounds(0, 0, 1200, 1200 );
    this.cameras.main.setZoom(2);
    this.physics.world.setBounds(0, 0, 1000, 1000);

    //création du camps rouge complet 
    this.add.sprite(100, 50, "tenterouge")
    piloti1 = this.add.sprite(120, 90, "pilotirouge")
    this.physics.world.enable([piloti1])
    piloti1.body.setImmovable()
    piloti1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    chiotte1 = this.add.sprite(300, 60, "chiotte")
    chiotte1.setScale(0.75)
    this.physics.world.enable([chiotte1])
    chiotte1.body.setImmovable()
    chiotte1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    rondin1 = this.add.sprite(300, 170, "rondin")
    this.physics.world.enable([rondin1])
    rondin1.body.setImmovable()
    rondin1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    tableafeu1 = this.add.sprite(300, 180, "tableafeu")
    this.physics.world.enable([tableafeu1])
    tableafeu1.body.setImmovable()
    tableafeu1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    chiotteR = this.add.sprite(300, 55, "chiotteR")
    chiotteR.setScale(0.75)
    this.physics.world.enable([chiotteR])
    chiotteR.body.setImmovable()
    chiotteR.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    gourde1 = this.add.sprite(425, 180, "gourde")
    gourde1.setScale(0.75)
    this.physics.world.enable([gourde1])
    gourde1.body.setImmovable()
    gourde1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    gourdeGold1 = this.add.sprite(425, 180, "gourdeGold")
    gourdeGold1.setScale(0.75)
    this.physics.world.enable([gourdeGold1])
    gourdeGold1.body.setImmovable()
    gourdeGold1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    bassin1 = this.add.sprite(150, 200, "bassin")
    bassin1.setScale(0.75)
    this.physics.world.enable([bassin1])
    bassin1.body.setImmovable()
    bassin1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    bassinGold1 = this.add.sprite(150, 200, "bassinGold")
    bassinGold1.setScale(0.75)
    this.physics.world.enable([bassinGold1])
    bassinGold1.body.setImmovable()
    bassinGold1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    //création du camps bleue complet 
    tentebleue = this.add.sprite(870, 50, "tentebleue")
    tentebleue.setScale(-1,1)
    pilotibleue = this.add.sprite(860, 90, "pilotibleue")
    pilotibleue.setScale(-1,1)
    chiotte2 = this.add.sprite(300, 60, "chiotte")
    chiotte2.setScale(0.75)
    rondin2 = this.add.sprite(300, 170, "rondin")
    tableafeu2 = this.add.sprite(300, 180, "tableafeu")
    chiotteR = this.add.sprite(300, 55, "chiotteR")
    chiotteR.setScale(0.75)
    gourde2 = this.add.sprite(425, 180, "gourde")
    gourde2.setScale(0.75)
    gourdeGold2 = this.add.sprite(425, 180, "gourdeGold")
    gourdeGold2.setScale(0.75)
    bassin2 = this.add.sprite(150, 200, "bassin")
    bassin2.setScale(0.75)
    bassinGold2 = this.add.sprite(150, 200, "bassinGold")
    bassinGold2.setScale(0.75)


     //création feu
    this.anims.create({
        key : "fire", 
        frames : [
            {key : "fire1"},
            {key : "fire2"},
            {key : "fire3"},
            {key : "fire4"},
        ],
        frameRate : 4,
        repeat : -1
    })

    //création animaux
    this.anims.create({
        key : "cow", 
        frames : [
            {key : "cow1"},
            {key : "cow2"},
            {key : "cow3"},
            {key : "cow4"},
        ],
        frameRate : 6,
        repeat : -1
    })

    this.anims.create({
        key : "pig", 
        frames : [
            {key : "pig1"},
            {key : "pig2"},
            {key : "pig3"},
            {key : "pig4"},
        ],
        frameRate : 6,
        repeat : -1
    })

    this.anims.create({
        key : "chicken", 
        frames : [
            {key : "chicken1"},
            {key : "chicken2"},
            {key : "chicken3"},
            {key : "chicken4"},
        ],
        frameRate : 6,
        repeat : -1
    })


    //création des animation pour le joueur
    this.anims.create({
        key : "playerWait", 
        frames : [
            {key : "joueur1"},
            {key : "joueur2"},
            {key : "joueur3"},
        ],
        frameRate : 4,
        repeat : -1
    })

    this.anims.create({
        key : "playerUp", 
        frames : [
            {key : "upjoueur1"},
            {key : "upjoueur2"},
            {key : "upjoueur3"},
            {key : "upjoueur4"},
            {key : "upjoueur5"},
            {key : "upjoueur6"},
        ],
        frameRate : 6,
        repeat : -1
    })

    this.anims.create({
        key : "playerDown", 
        frames : [
            {key : "downjoueur1"},
            {key : "downjoueur2"},
            {key : "downjoueur3"},
            {key : "downjoueur4"},
            {key : "downjoueur5"},
            {key : "downjoueur6"},
        ],
        frameRate : 6,
        repeat : -1
    })

    this.anims.create({
        key : "playerRight", 
        frames : [
            {key : "rightjoueur1"},
            {key : "rightjoueur2"},
            {key : "rightjoueur3"},
            {key : "rightjoueur4"},
            {key : "rightjoueur5"},
            {key : "rightjoueur6"},
        ],
        frameRate : 6,
        repeat : -1
    })

    this.anims.create({
        key : "playerLeft", 
        frames : [
            {key : "leftjoueur1"},
            {key : "leftjoueur2"},
            {key : "leftjoueur3"},
            {key : "leftjoueur4"},
            {key : "leftjoueur5"},
            {key : "leftjoueur6"},
        ],
        frameRate : 6,
        repeat : -1
    })
    //ajout d'arbre animée 
    this.anims.create({
        key : "tree", 
        frames : [
            {key : "tree1"},
            {key : "tree2"},
            {key : "tree3"},
            {key : "tree4"},
        ],
        frameRate : 6,
        repeat : -1
    })
      //animaux 
      cow1 = this.physics.add.sprite(120, 290, "cow")
      cow1.anims.play("cow")
      cow1.setScale(3)
      cow1.setSize(10,10)
      this.physics.world.enable([cow1])
      cow1.body.setImmovable()
      cow1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
      pig1 = this.physics.add.sprite(190, 350, "pig")
      pig1.anims.play("pig")
      pig1.setScale(3)
      pig1.setSize(10,10)
      this.physics.world.enable([pig1])
     pig1.body.setImmovable()
     pig1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
      chicken1 = this.physics.add.sprite(270, 250, "chicken")
      chicken1.anims.play("chicken")
      chicken1.setScale(3)
      chicken1.setSize(10,10)
      this.physics.world.enable([chicken1])
      chicken1.body.setImmovable()
      chicken1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
  
      //fire
      fire1 = this.physics.add.sprite(300, 150, "fire")
      fire1.anims.play("fire")
      fire1.setScale(0.1)
      
        //appartion du joueur
        joueur = this.physics.add.sprite( 500 , 550, "joueur")
        //Lancer la caméra sur le joueur
        this.cameras.main.startFollow(joueur);
        //taille joueur
        joueur.setScale(2.5);
        joueur.setSize(10,20);
        joueur.setOffset(0,0);
        //activer les collision du joueur sur les bords
        joueur.setCollideWorldBounds(true);
        //lancer l'anim de base
        joueur.anims.play("playerWait")
    //foret sur la carte
    tree = this.physics.add.sprite( 300 , 600, "tree")
    tree.anims.play("tree")
    tree.setSize(60,40)
    tree.setOffset(30,130)
    this.physics.world.enable([tree])
    tree.body.setImmovable()
    tree.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree1 = this.physics.add.sprite( 550 , 800, "tree")
    tree1.anims.play("tree")
    tree1.setSize(60,40)
    tree1.setOffset(30,130)
    this.physics.world.enable([tree1])
    tree1.body.setImmovable()
    tree1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree2 = this.physics.add.sprite( 650 , 300, "tree")
    tree2.anims.play("tree")
    tree2.setSize(60,40)
    tree2.setOffset(30,130)
    this.physics.world.enable([tree2])
    tree2.body.setImmovable()
    tree2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree3 = this.physics.add.sprite( 350 , 350, "tree")
    tree3.anims.play("tree")
    tree3.setSize(60,40)
    tree3.setOffset(30,130)
    this.physics.world.enable([tree3])
    tree3.body.setImmovable()
    tree3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree4 = this.physics.add.sprite( 50 , 550, "tree")
    tree4.anims.play("tree")
    tree4.setSize(60,40)
    tree4.setOffset(30,130)
    this.physics.world.enable([tree4])
    tree4.body.setImmovable()
    tree4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree5 = this.physics.add.sprite( 500 , 80, "tree")
    tree5.anims.play("tree")
    tree5.setSize(60,40)
    tree5.setOffset(30,130)
    this.physics.world.enable([tree5])
    tree5.body.setImmovable()
    tree5.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tree6 = this.physics.add.sprite( 800 , 600, "tree")
    tree6.anims.play("tree")
    tree6.setSize(60,40)
    tree6.setOffset(30,130)
    this.physics.world.enable([tree6])
    tree6.body.setImmovable()
    tree6.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

}

function update(time, delta){

    //activer la direction selon la touche du keyboard
    if(cursor.up.isDown) {
        joueur.setVelocityY(-200);
        joueur.anims.play("playerUp", true)
    }

    if(cursor.down.isDown) {
        joueur.setVelocityY(200);
        joueur.anims.play("playerDown", true)
    }

    if(cursor.right.isDown) {
        joueur.setVelocityX(200);
        joueur.anims.play("playerRight", true)
    }

    if(cursor.left.isDown) {
        joueur.setVelocityX(-200);
        joueur.anims.play("playerLeft", true)
    }
    //arreter le deplacement si on ne touche plus le keyboard
    if (cursor.left.isUp && cursor.right.isUp){
        joueur.setVelocityX(0); 
    }

    if (cursor.up.isUp && cursor.down.isUp){
        joueur.setVelocityY(0);
    }

    this.physics.world.collide(joueur,chiotte1)
    this.physics.world.collide(joueur,piloti1)
    this.physics.world.collide(joueur,rondin1)
    this.physics.world.collide(joueur,tableafeu1)
    this.physics.world.collide(joueur,chiotteR)
    this.physics.world.collide(joueur,gourde1)
    this.physics.world.collide(joueur,gourdeGold1)
    this.physics.world.collide(joueur,bassin1)
    this.physics.world.collide(joueur,bassinGold1)
    this.physics.world.collide(joueur,cow1)
    this.physics.world.collide(joueur,pig1)
    this.physics.world.collide(joueur,chicken1)
    this.physics.world.collide(joueur,tree)
    this.physics.world.collide(joueur,tree1)
    this.physics.world.collide(joueur,tree2)
    this.physics.world.collide(joueur,tree3)
    this.physics.world.collide(joueur,tree4)
    this.physics.world.collide(joueur,tree5)
    this.physics.world.collide(joueur,tree6)

}