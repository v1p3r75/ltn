<!doctype html>
<html>
<head>
<title>LTN - Accueil</title>
<?php include 'seo.php'?>
<link rel="stylesheet" type="text/css" media="all" href="css/font-awesome.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/animate.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/layout.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/app.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/pf.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/bstyle.css"/>
<link rel="stylesheet" type="text/css" media="all" href="css/main.css"/>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/ltn.js"></script>
<script type="text/javascript" src="js/jssor.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<div class="wrp full">
      <?php include 'header.php'?>
      <div id="ltn_cnt" class="container-40 full flex pt-20 pb-20 justify-sb bbx">
	    	<?php include 'sidebar_left.php'?>
        <div class="download" style="width : 75%;">
          <div style="background: var(--darkred); height: 130px; padding: 10px; color: white; border-top: #bdae2e solid 4px; box-shadow: 1px 3px 2px #CCCCCC;">
          <h2>Bibliothèque</h2>
						<p>Le site du lycée technique de Natitingou met à votre disposition
              une bibliothèque d'epreuves venant de tous les lycées du Bénin.<br>
            Vous pouvez télécharger gratuitement ici vos epreuves en seulement un clic.</p>
          </div>
          <div class="info full flex bxx mt-40" style="height: 350px;">
              <div class="info1 mr-20 bbx" style="position: relative;">
                  <div class="news bbx">
                    <h2>Plus de 1.000</h2>
                    <p>Plus de 1.000 documents ont été déjà publiés<br>sur notre site.</p>
                  </div>
              </div>
              <div class="info2" style="position: relative;">
              <div class="news bbx">
                    <h2>Améliorez-vous</h2>
                    <p>Grâçe aux épreuves disponible sur le site<br>vous pouvez améliorer vos compétences.</p>
                  </div>
              </div>
          </div>
          <div class="gestion">
            <div class="onglet flex bbx full mt-40">
              <div class="tech half" onclick="onglet(1)" style='border-right : 3px solid white'>Lycée Techinque Commercial et Industriel</div>
              <div class="agricole half" onclick="onglet(2)">Lycée Technique et Agricole</div>
            </div>
            <div class="epreuve">
              <div class="carret mt-20 flex">
                <a href="#" class="prev-b left mt-40">&#10094;</a>
                
                  <div class="lycee half flex overflow-h main-content">
                  <div class="move mr-10 anim">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Rechercher pour tous les Lycee du Benin</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5 ">Lycée Technique de Natitingou</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5 technique">Lycée Technique de Djougou</p>
                  </div>
                  <div class="move mr-10 anim agri">
                    <img src="img/defaultj.png">
                    <p class="pd-5 ">Lycée Agricole de Natitingou</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Lycée Techinque et Industriel de Ouidah</p>
                  </div>
                  <div class="move mr-10 anim agri">
                    <img src="img/defaultj.png">
                    <p class="pd-5 ">Lycée d'Akassato</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Lycée Techinque Coulibali</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5 ">Lycée Techinque de Bopa</p>
                  </div>
                  <div class="move mr-10 anim agri">
                    <img src="img/defaultj.png">
                    <p class="pd-5 ">Lycée Agricole de Adjahonmè</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Lycée Industriel de Porto-Novo</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Lycée Techinque et Insdustriel de Djakotomè</p>
                  </div>
                  <div class="move mr-10 anim technique">
                    <img src="img/defaultj.png">
                    <p class="pd-5">Lycée Techinque de Bohicon</p>
                  </div>
                  </div>
                
                <a href="#" class="next-b right mt-40">&#10095;</a>
              </div>
            </div>
          </div>
            <div class="welcome">
              <h1 class="bienvenue">Bienvenus à la page de téléchargement des épreuves et documents du lt-natitingou.Veillez choisir un Lycée parmis ceux listés çi haut</h1>
            </div>
            <div class="formulare" id="formulaire" >
              <?php include 'formulaire.php'; ?>
            </div>

        </div>
				
      </div>
      <?php include 'footer.php'?>
        <script src="js/nojs.js"></script>
  </div>
</body>
</html>
<!--<div class="full navigation">
            <ul class="list menu">
              <li>GUIDE</li>
              <li>EXAMENS</li>
              <li>DEVOIRS</li>
              <li>LIVRES SCOLAIRE</li>
              <li>RESUME DE COURS</li>
              <li>CONCOURS</li>
            </ul>
            <div id="developer" class="full flex justify-sb">
                <div class="matiere">

                </div>
                <div class="treeview">

                </div>
             </div>
      </div>
