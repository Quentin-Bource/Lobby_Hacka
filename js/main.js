
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
                gravity: { y: 0 },
                debug: false
            }
        }
}

const game = new Phaser.Game(config);

var cursor;
var joueur;
var camera;

function preload(){

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

    //créer input avec les keyboard
    cursor = this.input.keyboard.createCursorKeys();

    //Background et position
    var backgroundImage = this.add.sprite(0 , 0 ,"background")
    backgroundImage.setPosition(config.width/2, config.height/2)

    //caméra  plus colision sur le bord de la map
    this.cameras.main.setBounds(0, 0, 1200, 1200);
    this.cameras.main.setZoom(2);
    this.physics.world.setBounds(0, 0, 1000, 1000);

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

    //foret sur la carte
    tree = this.physics.add.sprite( 300 , 600, "tree")
    tree.anims.play("tree")
    tree1 = this.physics.add.sprite( 550 , 800, "tree")
    tree1.anims.play("tree")
    tree2 = this.physics.add.sprite( 650 , 300, "tree")
    tree2.anims.play("tree")
    tree3 = this.physics.add.sprite( 350 , 350, "tree")
    tree3.anims.play("tree")
    tree4 = this.physics.add.sprite( 50 , 550, "tree")
    tree4.anims.play("tree")
    tree5 = this.physics.add.sprite( 500 , 80, "tree")
    tree5.anims.play("tree")
    tree6 = this.physics.add.sprite( 800 , 600, "tree")
    tree6.anims.play("tree")

    //appartion du joueur
    joueur = this.physics.add.sprite( 500 , 550, "joueur")
    //Lancer la caméra sur le joueur
    this.cameras.main.startFollow(joueur);
    //taille joueur
    joueur.setScale(2.5);
    //activer les collision du joueur sur les bords
    joueur.setCollideWorldBounds(true);
    //lancer l'anim de base
    joueur.anims.play("playerWait")
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
}