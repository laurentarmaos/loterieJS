<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>loterie</title>
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <script src="http://code.jquery.com/jquery-3.4.0.min.js"></script>
</head>
<body>

  <table>

    <?php for ($j=0; $j < 5 ; $j++) {
      echo '<tr>';
      for ($i = 1; $i <=10 ; $i++) {
        echo '<td class = "numero" id = '. ($j *10 + $i) .'>'. ($j *10 + $i) . '</td>';
      }
      echo '</tr>';
    } ?>

  </table>

  <article class="tirage">
    <article class="boutons">
      <button type="button" name="button" class="tirerNum btn btn-primary" disabled>Lancer le tirage</button>
      <button type="button" name="button" class="effacerTirage btn btn-primary">Recommencer</button>
    </article>
    <article class="infoTirage">
      <p>Choisir 6 numéros : <span class = "choix"></span> /6</p>
      <p>Numéro tirés : <span class="num"></span> </p>
      <p>Nombre de numéros gagnants : <span class="winNumber"></span></p>
    </article>
  </article>


</body>
<script type="text/javascript" src="js/script.js"></script>
</html>
