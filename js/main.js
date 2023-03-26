
var config = {
    type : Phaser.AUTO,
    width : 1000, 
    height : 1000, 
     scale :{
            mode:Phaser.Scale.NO_SCALE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
        physics: {
            default: 'arcade',
            arcade: {
                debug:false,
                gravity: { y: 0 },
            }
        }
       
}

const game = new Phaser.Game(config);
var pointer;
var cursor;
var joueur;
var camera;

function preload(){

    //intégralité des choses qu'on retrouve dans un camps
    this.load.image("tentebleue", "public/assets/decor/tente_bleue.png")
    this.load.image("tentejaune", "public/assets/decor/tente_jaune.png")
    this.load.image("tentemauve", "public/assets/decor/tente_mauve.png")
    this.load.image("tenterouge", "public/assets/decor/tente_rouge.png")
    this.load.image("pilotibleue", "public/assets/decor/tentePilotisBleue.png")
    this.load.image("pilotijaune", "public/assets/decor/tentePilotisJaune.png")
    this.load.image("pilotimauve", "public/assets/decor/tentePilotisMauve.png")
    this.load.image("pilotirouge", "public/assets/decor/tentePilotisRouge.png")
    this.load.image("chiotte", "public/assets/decor/Chiottes.png")
    this.load.image("rondin", "public/assets/decor/Rondins.png")
    this.load.image("tableafeu" , "public/assets/decor/tbaf.png")
    this.load.image("chiotteR" , "public/assets/decor/chiotteR.png")
    this.load.image("chiotteB" , "public/assets/decor/chiotteB.png")
    this.load.image("chiotteJ" , "public/assets/decor/chiotteJ.png")
    this.load.image("chiotteM" , "public/assets/decor/chiotteM.png")
    this.load.image("bassin" , "public/assets/decor/bassin.png")
    this.load.image("bassinGold" , "public/assets/decor/bassinGold.png")
    this.load.image("gourde" , "public/assets/decor/gourde.png")
    this.load.image("gourdeGold" , "public/assets/decor/gourdeGold.png")










    //animation feu
    this.load.image("fire1", "public/assets/decor/fire1.png")
    this.load.image("fire2", "public/assets/decor/fire2.png")
    this.load.image("fire3", "public/assets/decor/fire3.png")
    this.load.image("fire4", "public/assets/decor/fire4.png")

    //animation vache
    this.load.image("cow1", "public/assets/animals/cow1.png")
    this.load.image("cow2", "public/assets/animals/cow2.png")
    this.load.image("cow3", "public/assets/animals/cow3.png")
    this.load.image("cow4", "public/assets/animals/cow4.png")

    //animation chicken
    this.load.image("chicken1", "public/assets/animals/chicken1.png")
    this.load.image("chicken2", "public/assets/animals/chicken2.png")
    this.load.image("chicken3", "public/assets/animals/chicken3.png")
    this.load.image("chicken4", "public/assets/animals/chicken4.png")

    //animation pig 
    this.load.image("pig1", "public/assets/animals/pig1.png")
    this.load.image("pig2", "public/assets/animals/pig2.png")
    this.load.image("pig3", "public/assets/animals/pig3.png")
    this.load.image("pig4", "public/assets/animals/pig4.png")

    //background
    this.load.image("background", "public/assets/perso/background.png")

    //arbre animation 
    this.load.image("tree1", "public/assets/decor/tree1.png")
    this.load.image("tree2", "public/assets/decor/tree2.png")
    this.load.image("tree3", "public/assets/decor/tree3.png")
    this.load.image("tree4", "public/assets/decor/tree4.png")

    //Animation joueur sur place
    this.load.image("joueur1", "public/assets/perso/player1.png")
    this.load.image("joueur2", "public/assets/perso/player2.png")
    this.load.image("joueur3", "public/assets/perso/player3.png")

    //Animation joueur qui monte
    this.load.image("upjoueur1", "public/assets/perso/upplayer1.png")
    this.load.image("upjoueur2", "public/assets/perso/upplayer2.png")
    this.load.image("upjoueur3", "public/assets/perso/upplayer3.png")
    this.load.image("upjoueur4", "public/assets/perso/upplayer4.png")
    this.load.image("upjoueur5", "public/assets/perso/upplayer5.png")
    this.load.image("upjoueur6", "public/assets/perso/upplayer6.png")

    //Animation joueur qui descend
    this.load.image("downjoueur1", "public/assets/perso/downplayer1.png")
    this.load.image("downjoueur2", "public/assets/perso/downplayer2.png")
    this.load.image("downjoueur3", "public/assets/perso/downplayer3.png")
    this.load.image("downjoueur4", "public/assets/perso/downplayer4.png")
    this.load.image("downjoueur5", "public/assets/perso/downplayer5.png")
    this.load.image("downjoueur6", "public/assets/perso/downplayer6.png")

    //Animation joueur qui va a droite
    this.load.image("rightjoueur1", "public/assets/perso/rightplayer1.png")
    this.load.image("rightjoueur2", "public/assets/perso/rightplayer2.png")
    this.load.image("rightjoueur3", "public/assets/perso/rightplayer3.png")
    this.load.image("rightjoueur4", "public/assets/perso/rightplayer4.png")
    this.load.image("rightjoueur5", "public/assets/perso/rightplayer5.png")
    this.load.image("rightjoueur6", "public/assets/perso/rightplayer6.png")

    //Animation joueur qui va a gauche
    this.load.image("leftjoueur1", "public/assets/perso/leftplayer1.png")
    this.load.image("leftjoueur2", "public/assets/perso/leftplayer2.png")
    this.load.image("leftjoueur3", "public/assets/perso/leftplayer3.png")
    this.load.image("leftjoueur4", "public/assets/perso/leftplayer4.png")
    this.load.image("leftjoueur5", "public/assets/perso/leftplayer5.png")
    this.load.image("leftjoueur6", "public/assets/perso/leftplayer6.png")

}

function create(){

    var block = this.physics.add.image(400, 100, 'block');

    //créer input avec les keyboard
    cursor = this.input.keyboard.createCursorKeys();

    pointer = this.input.addPointer(1);

    //Background et position
    var backgroundImage = this.add.sprite(0 , 0 ,"background")
    backgroundImage.setPosition(config.width/2, config.height/2)

    //caméra  plus colision sur le bord de la map
    this.cameras.main.setBounds(0, 0, 1000, 1000 );
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
    tentebleue.setFlip(true,false)

    pilotibleue = this.add.sprite(860, 90, "pilotibleue")
    pilotibleue.setFlip(true,false)
    this.physics.world.enable([pilotibleue])
    pilotibleue.body.setImmovable()
    pilotibleue.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotte2 = this.add.sprite(650, 60, "chiotte")
    chiotte2.setScale(0.75)
    this.physics.world.enable([chiotte2])
    chiotte2.body.setImmovable()
    chiotte2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    rondin2 = this.add.sprite(700, 170, "rondin")
    this.physics.world.enable([rondin2])
    rondin2.body.setImmovable()
    rondin2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tableafeu2 = this.add.sprite(700, 180, "tableafeu")
    this.physics.world.enable([tableafeu2])
    tableafeu2.body.setImmovable()
    tableafeu2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotteB = this.add.sprite(650, 55, "chiotteB")
    chiotteB.setScale(0.75)
    this.physics.world.enable([chiotteB])
    chiotteB.body.setImmovable()
    chiotteB.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourde2 = this.add.sprite(575, 180, "gourde")
    gourde2.setScale(0.75)
    this.physics.world.enable([gourde2])
    gourde2.body.setImmovable()
    gourde2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourdeGold2 = this.add.sprite(575, 180, "gourdeGold")
    gourdeGold2.setScale(0.75)
    this.physics.world.enable([gourdeGold2])
    gourdeGold2.body.setImmovable()
    gourdeGold2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassin2 = this.add.sprite(800, 200, "bassin")
    bassin2.setScale(0.75)
    this.physics.world.enable([bassin2])
    bassin2.body.setImmovable()
    bassin2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassinGold2 = this.add.sprite(800, 200, "bassinGold")
    bassinGold2.setScale(0.75)
    this.physics.world.enable([bassinGold2])
    bassinGold2.body.setImmovable()
    bassinGold2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    //création du camps mauve complet 
    tentemauve = this.add.sprite(870, 849, "tentemauve")
    tentemauve.setFlip(true,false)

    pilotimauve = this.add.sprite(860, 870, "pilotimauve")
    pilotimauve.setFlip(true,false)
    this.physics.world.enable([pilotimauve])
    pilotimauve.body.setImmovable()
    pilotimauve.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotte3 = this.add.sprite(650, 860, "chiotte")
    chiotte3.setScale(0.75)
    this.physics.world.enable([chiotte3])
    chiotte3.body.setImmovable()
    chiotte3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    rondin3 = this.add.sprite(650, 695, "rondin")
    this.physics.world.enable([rondin3])
    rondin3.body.setImmovable()
    rondin3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tableafeu3 = this.add.sprite(650, 700, "tableafeu")
    this.physics.world.enable([tableafeu3])
    tableafeu3.body.setImmovable()
    tableafeu3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotteM = this.add.sprite(650, 854, "chiotteM")
    chiotteM.setScale(0.75)
    this.physics.world.enable([chiotteM])
    chiotteM.body.setImmovable()
    chiotteM.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourde3 = this.add.sprite(750, 750, "gourde")
    gourde3.setScale(0.75)
    this.physics.world.enable([gourde3])
    gourde3.body.setImmovable()
    gourde3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourdeGold3 = this.add.sprite(750, 750, "gourdeGold")
    gourdeGold3.setScale(0.75)
    this.physics.world.enable([gourdeGold3])
    gourdeGold3.body.setImmovable()
    gourdeGold3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassin3 = this.add.sprite(830, 740, "bassin")
    bassin3.setScale(0.75)
    this.physics.world.enable([bassin3])
    bassin3.body.setImmovable()
    bassin3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassinGold3 = this.add.sprite(830, 740, "bassinGold")
    bassinGold3.setScale(0.75)
    this.physics.world.enable([bassinGold3])
    bassinGold3.body.setImmovable()
    bassinGold3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    //création du camps jaune complet 
    tentejaune = this.add.sprite(120, 849, "tentejaune")

    pilotijaune = this.add.sprite(20, 870, "pilotijaune")
    this.physics.world.enable([pilotijaune])
    pilotijaune.body.setImmovable()
    pilotijaune.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotte4 = this.add.sprite(350, 860, "chiotte")
    chiotte4.setScale(0.75)
    this.physics.world.enable([chiotte4])
    chiotte4.body.setImmovable()
    chiotte4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    rondin4 = this.add.sprite(250, 705, "rondin")
    this.physics.world.enable([rondin4])
    rondin4.body.setImmovable()
    rondin4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    tableafeu4 = this.add.sprite(250, 710, "tableafeu")
    this.physics.world.enable([tableafeu4])
    tableafeu4.body.setImmovable()
    tableafeu4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    chiotteJ = this.add.sprite(350, 854, "chiotteJ")
    chiotteJ.setScale(0.75)
    this.physics.world.enable([chiotteJ])
    chiotteJ.body.setImmovable()
    chiotteJ.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourde4 = this.add.sprite(350, 750, "gourde")
    gourde4.setScale(0.75)
    this.physics.world.enable([gourde4])
    gourde4.body.setImmovable()
    gourde4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    gourdeGold4 = this.add.sprite(350, 750, "gourdeGold")
    gourdeGold4.setScale(0.75)
    this.physics.world.enable([gourdeGold4])
    gourdeGold4.body.setImmovable()
    gourdeGold4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassin4 = this.add.sprite(150, 740, "bassin")
    bassin4.setScale(0.75)
    this.physics.world.enable([bassin4])
    bassin4.body.setImmovable()
    bassin4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

    bassinGold4 = this.add.sprite(150, 740, "bassinGold")
    bassinGold4.setScale(0.75)
    this.physics.world.enable([bassinGold4])
    bassinGold4.body.setImmovable()
    bassinGold4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)


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

        cow2 = this.physics.add.sprite(870, 290, "cow")
        cow2.anims.play("cow")
        cow2.setScale(3,3)
        cow2.setFlip(true,false)
        cow2.setSize(10,10)
        cow2.setOffset(0,0)
        this.physics.world.enable([cow2])
        cow2.body.setImmovable()
        cow2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        pig2 = this.physics.add.sprite(800, 350, "pig")
        pig2.anims.play("pig")
        pig2.setScale(3,3)
        pig2.setFlip(true,false)
        pig2.setSize(10,10)
        this.physics.world.enable([pig2])
        pig2.body.setImmovable()
        pig2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        chicken2 = this.physics.add.sprite(750, 270, "chicken")
        chicken2.anims.play("chicken")
        chicken2.setScale(3,3)
        chicken2.setFlip(true,false)
        chicken2.setSize(10,10)
        this.physics.world.enable([chicken2])
        chicken2.body.setImmovable()
        chicken2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)


        cow3 = this.physics.add.sprite(950, 650, "cow")
        cow3.anims.play("cow")
        cow3.setScale(3,3)
        cow3.setFlip(true,false)
        cow3.setSize(10,10)
        cow3.setOffset(0,0)
        this.physics.world.enable([cow3])
        cow3.body.setImmovable()
        cow3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        pig3 = this.physics.add.sprite(920, 750, "pig")
        pig3.anims.play("pig")
        pig3.setScale(3,3)
        pig3.setFlip(true,false)
        pig3.setSize(10,10)
        this.physics.world.enable([pig3])
        pig3.body.setImmovable()
        pig3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        chicken3 = this.physics.add.sprite(650, 950, "chicken")
        chicken3.anims.play("chicken")
        chicken3.setScale(3,3)
        chicken3.setFlip(true,false)
        chicken3.setSize(10,10)
        this.physics.world.enable([chicken3])
        chicken3.body.setImmovable()
        chicken3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

        cow4 = this.physics.add.sprite(40, 750, "cow")
        cow4.anims.play("cow")
        cow4.setScale(3,3)
        cow4.setFlip(true,false)
        cow4.setSize(10,10)
        cow4.setOffset(0,0)
        this.physics.world.enable([cow4])
        cow4.body.setImmovable()
        cow4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        pig4 = this.physics.add.sprite(160, 650, "pig")
        pig4.anims.play("pig")
        pig4.setScale(3,3)
        pig4.setFlip(true,false)
        pig4.setSize(10,10)
        this.physics.world.enable([pig4])
        pig4.body.setImmovable()
        pig4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
        chicken4 = this.physics.add.sprite(240, 850, "chicken")
        chicken4.anims.play("chicken")
        chicken4.setScale(3,3)
        chicken4.setFlip(true,false)
        chicken4.setSize(10,10)
        this.physics.world.enable([chicken4])
        chicken4.body.setImmovable()
        chicken4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)
    
    
        //fire
        fire1 = this.physics.add.sprite(300, 150, "fire")
        fire1.anims.play("fire")
        fire1.setScale(0.1)
        this.physics.world.enable([fire1])
        fire1.body.setImmovable()
        fire1.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

        fire2 = this.physics.add.sprite(700, 150, "fire")
        fire2.anims.play("fire")
        fire2.setScale(0.1)
        this.physics.world.enable([fire2])
        fire2.body.setImmovable()
        fire2.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

        fire3 = this.physics.add.sprite(650, 662, "fire")
        fire3.anims.play("fire")
        fire3.setScale(0.1)
        this.physics.world.enable([fire3])
        fire3.body.setImmovable()
        fire3.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)

        fire4 = this.physics.add.sprite(250, 672, "fire")
        fire4.anims.play("fire")
        fire4.setScale(0.1)
        this.physics.world.enable([fire4])
        fire4.body.setImmovable()
        fire4.body.setVelocity(0,0).setBounce(0,0).setCollideWorldBounds(true)



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

    if (this.input.pointer1.isDown) {
        var touchX = this.input.pointer1.x;
        var touchY = this.input.pointer1.y;

        if (touchY < joueur.y - 10) {
            joueur.setVelocityY(-200);
            joueur.anims.play("playerUp", true);
        } else if (touchY > joueur.y + 10) {
            joueur.setVelocityY(200);
            joueur.anims.play("playerDown", true);
        } else {
            joueur.setVelocityY(0);
        }

        if (touchX < joueur.x - 10) {
            joueur.setVelocityX(-200);
            joueur.anims.play("playerLeft", true);
        } else if (touchX > joueur.x + 10) {
            joueur.setVelocityX(200);
            joueur.anims.play("playerRight", true);
        } else {
            joueur.setVelocityX(0);
        }
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

    this.physics.world.collide(joueur,fire1)
    this.physics.world.collide(joueur,fire2)

    this.physics.world.collide(joueur,chiotte2)
    this.physics.world.collide(joueur,pilotibleue)
    this.physics.world.collide(joueur,rondin2)
    this.physics.world.collide(joueur,tableafeu2)
    this.physics.world.collide(joueur,chiotteB)
    this.physics.world.collide(joueur,gourde2)
    this.physics.world.collide(joueur,gourdeGold2)
    this.physics.world.collide(joueur,bassin2)
    this.physics.world.collide(joueur,bassinGold2)

    this.physics.world.collide(joueur,cow2)
    this.physics.world.collide(joueur,pig2)
    this.physics.world.collide(joueur,chicken2)

    this.physics.world.collide(joueur,chiotte3)
    this.physics.world.collide(joueur,pilotimauve)
    this.physics.world.collide(joueur,rondin3)
    this.physics.world.collide(joueur,tableafeu3)
    this.physics.world.collide(joueur,chiotteM)
    this.physics.world.collide(joueur,gourde3)
    this.physics.world.collide(joueur,gourdeGold3)
    this.physics.world.collide(joueur,bassin3)
    this.physics.world.collide(joueur,bassinGold3)

    this.physics.world.collide(joueur,cow3)
    this.physics.world.collide(joueur,pig3)
    this.physics.world.collide(joueur,chicken3)

    this.physics.world.collide(joueur,chiotte4)
    this.physics.world.collide(joueur,pilotijaune)
    this.physics.world.collide(joueur,rondin4)
    this.physics.world.collide(joueur,tableafeu4)
    this.physics.world.collide(joueur,chiotteJ)
    this.physics.world.collide(joueur,gourde4)
    this.physics.world.collide(joueur,gourdeGold4)
    this.physics.world.collide(joueur,bassin4)
    this.physics.world.collide(joueur,bassinGold4)

    this.physics.world.collide(joueur,cow4)
    this.physics.world.collide(joueur,pig4)
    this.physics.world.collide(joueur,chicken4)

}

