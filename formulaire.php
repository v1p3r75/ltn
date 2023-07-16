<div class="action full flex bbx animation2">
            <div class="matiere bbx" style="text-align: center;">
                <h4 style="font-weight: normal; margin: 10px auto; background: #CCCCCC; padding: 15px;opacity: 0.7; border-bottom:1px solid #999; width: 50%; box-shadow : 1px 3px 2px #CCCCCC;">
                Trier par matière</h4>
                <h3 style="font-weight: normal;text-align: left; margin: 10px auto; padding: 15px 0 15px 0; margin-bottom: 30px;opacity: 0.9; border-bottom:1px solid #999; width: 50%">
                Matière</h3>
                <select name="choixMatiere" id="matiere">
                    <option value="">Tous</option>
                    <option value="">Français</option>
                    <option value="">Mathématiques</option>
                    <option value="">Droit de travail</option>
                    <option value="">Physique</option>
                    <option value="">Algorithme</option>
                    <option value="">Dessin technique</option>
                    <option value="">Chimie de l'eau</option>
                    <option value="">Analyse de systeme</option>
                    <option value="">...</option>
                </select>
                <a href="#output" class="submit"> RECHERCHER</a>
            </div>
            <div class="search bbx">
              <input type="text" class="terme" placeholder="Rechercher une épreuve ici ...">
              <div class="full flex bbx recher pt-20 mt-40">
              <div class="lycee elmts" style="margin-left: 15px;">
                  <h3>Filières</h3>
                    <select name="choixMatiere" id="matiere">
                    <option value="">Tous</option>
                    <option value="">STAG</option>
                    <option value="">STI</option>
                    <option value="">HR</option>
                    
                </select>
                  </div>
                  <div class="etude pl-20 elmts">
                    <h3>Classe</h3>
                      <select name="choixMatiere" id="matiere">
                      <option value="">Tous</option>
                      <option value="">1ere Année</option>
                      <option value="">2è Année</option>
                      <option value="">3è Année</option>
                      <option value="">2nde</option>
                      <option value="">1ere</option>
                      <option value="">Tle</option>
                    </select>
                  </div>
                  
                  <div class="periode pl-20 elmts">
                    <h3>Spécialité</h3>
                      <select name="choixMatiere" id="matiere">
                      <option value="">Tous</option>
                      <option value="">Génie Civile</option>
                      <option value="">Eau et Assainissement</option>
                      <option value="">Installation et Maintenance en Informatique</option>
                      <option value="">Electrotechnique</option>
                      <option value="">Mécanique Automobile</option>
                      <option value="">Mécanique Générale</option>
                      <option value="">G1</option>
                      <option value="">G2</option>
                      <option value="">G3</option>
                      <option value="">...</option>
                </select>
                  </div>
                  <div class="matiere2 pl-20 elmts">
                    <h3>Matière</h3>
                      <select name="choixMatiere" id="matiere">
                      <option value="">Tous</option>
                      <option value="">Français</option>
                      <option value="">Mathématiques</option>
                      <option value="">Droit de travail</option>
                      <option value="">Physique</option>
                      <option value="">Algorithme</option>
                      <option value="">Dessin technique</option>
                      <option value="">Chimie de l'eau</option>
                      <option value="">Analyse de systeme</option>
                      <option value="">...</option>
                    </select>
                  </div>
              </div>
              <a href="#output" class="submit">RECHERCHER</a>
            </div>
          </div>
          <div class="hide mt-10 bbx" id="output">
                <p class="output">Résultats</p>
                <p class="selection" onclick="select()">Selectionner tout</p>
                <p class="uselection" onclick="uselect()">Annuler tout</p>
                <p class="all" onclick="down()">Télécharger</p>

                <div class="files">
                  <p><a href="files/avant-metre-et-metre.pdf" download class="down"><input type="checkbox" id="file">avant-metre-et-metre.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p><a href="files/electrotechinque-de-nati.pdf" download class="down"><input type="checkbox" id="file">electrotechinque-de-nati.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p><a href="files/epreuve-de-algorithme-premier.pdf" download class="down"><input type="checkbox" id="file">epreuve-de-algorithme-premier.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p><a href="files/epreuve-de-hydraulique.pdf" download class="down"><input type="checkbox" id="file">epreuve-de-hydraulique.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p><a href="files/epreuve-de-mathématiques.pdf" download class="down"><input type="checkbox" id="file">epreuve-de-mathématiques.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p><a href="files/physique-chimie-de-leau-epreuve.pdf" download class="down"><input type="checkbox" id="file">physique-chimie-de-leau-epreuve.pdf <img src="img/download-linux.png" alt="download ico"/></a></p>
                  <p class="defil"><a href="#"><<</a><a href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">>></a></p>
                </div>
            </div>
 