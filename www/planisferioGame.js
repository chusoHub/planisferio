//PLANISFERIO INTERACTIVO JESÚS VICENTE 2013
	//POSICIONES DE LAS CONSTELACIONES EN EL PLANISFERIO EN COORDENADAS POLARES CONSIDERANDO EL RADIO MÁXIMO DE LA BÓBEDA R=1
	//LA BÓBEDA EN EL DIBUJO GRANDE 800 ES DE  337.5 DE RADIO   (EL PEQUEÑO DE 400 TIENE RADIO DE BÓBEDA 168.76)
	//ÁNGULO CERO SERÍA 30 DE JUNIO DE LA RUEDA DEL PLANISFERIO (EN EL MEDIO Y A LA DERECHA DE LA CIRCUNFERENCIA)---
	//PARA QUE COINCIDA CON LA AMPLITUD DEL ÁNGULO DEL CANVAS EL SENTIDO ES EL INVERSO A LAS AGUJAS DEL RELOJ
	//SE DEFINE CADA CONSTELACIÓN CON UN TRAPECIO CIRCULAR Y CUANDO SEA NECESARIO SE EMPLE UN SEGUNDO TRAPECIO CIRCULAR.
	//NOMBRE CONSTELACIÓN       //ÁNGULO MÍNIMO     //ÁNULO MÁXIMO      //RADIO MÍNIMO      //RADIO MÁXIMO      //OTRAS ANOTACIONES
	//LINCE                       0                   50                  0.30                0.5                         
	//GÉMINIS                     5                   28                  0.45                0.7                          
	//CAN MENOR                   19                  27                  0.67                0.77                                            
	//CAN MAYOR                   2                   17                  0.75                0.12                             
	//CANCER                      32                  47                  0.50                0.75                        
	//HIDRA                       38                  76                  0.7                 1                                                                                                         
	//OSA MAYOR                   33                  120                 0.22                0.49                             
	//LEO                         55                  88                  0.54                0.75                            
	//CRATER                      74                  83                  0.88                1                            
	//PERROS DE CAZA              95                  109                 0.4                 0.5                            
	//VIRGO                       85                  133                 0.67                0.9                             
	//CUERVO                      90                  101                 0.9                 1                            
	//OSA MENOR                   122                 180                 0                   0.18
	//                            0                   360                 0                   0.06
	//DRAGÓN                      76                  210                 0.13                0.35                   
	//BOYERO                      116                 142                 0.4                 0.7                             
	//LIBRA                       130                 150                 0.83                1                                                                                                                                  
	//CORONA BOREAL               138                 155                 0.48                0.6                              
	//SERPIENTE                   141                 154                 0.6                 0.85                             
	//HÉRCULES                    151                 184                 0.36                0.67                              
	//OFICUO                      151                 186                 0.65                0.97                              
	//LIRA                        185                 198                 0.42                0.55                              
	//ESCUDO                      185                 194                 0.81                0.93                             
	//SAGITARIO                   192                 203                 0.88                1                              
	//CISNE                       198                 230                 0.32                0.57                              
	//FLECHA                      201                 213                 0.58                0.68                              
	//ÁGUILA                      194                 215                 0.65                0.84                              
	//DELFÍN                      214                 222                 0.63                0.75                              
	//CAPRICORNIO                 211                 239                 0.87                1                              
	//CEFEO                       220                 272                 0.09                0.31                              
	//LAGARTO                     239                 253                 0.31                0.47                              
	//PEGASO                      232                 275                 0.47                0.76                              
	//ACUARIO                     219                 259                 0.75                0.98                              
	//CASIOPEA                    262                 304                 0.2                 0.35                             
	//ANDRÓMEDA                   268                 305                 0.38                0.56                              
	//PISCIS                      255                 301                 0.54                0.82                              
	//BALLENA                     271                 318                 0.65                1                              
	//ARIES                       293                 315                 0.5                 0.63                             
	//PERSEO                      305                 334                 0.25                0.52                              
	//TAURO                       317                 357                 0.5                 0.7                             
	//ERIDANUS                    308                 348                 0.79                1                              
	//AURIGA                      339                 360                 0.33                0.58
	//                            0                   3                   0.33                0.53
	//ORIÓN                       339                 360                 0.62                0.9
	//                            0                   4                   0.62                0.76
	//LIEBRE	                  344                 360                 0.87                1   
	 
	
	
	    var i=0;
	    var j=0;
	    var vwidth=0;
	    var vheight=0;
		var	c; // Objeto Canvas: Planisferio
		var	ctx; //Contexto del canvas: Planisferio
		
		var	c2; // Objeto Segundo Canvas: Máscara
		var	ctx2; //Contexto del segundo canvas: Máscara
		
		var cLoading; //Donde se sacan los mensajes loading
		var ctxLoading;
		
		var ct; //Es donde se pinta el tiempo del juego
		var ctxt;
		var pantallat; //funcion para guardar la pantalla y que no se borre al redimensionar o pulsar otros botones
		
		var c3; //Es donde se pinta el juego y donde se recogen los eventos touch
		var ctx3;
		var pantalla3; //funcion para guardar la pantalla y que no se borre al redimensionar o pulsar otros botones
		
		var swpulsado=false; //Siwtch Para ver si está presionado el touch o el mouse
		var swanimar=false; //Siwtch Para ver si se inicia el Loop animar
		//var sjugando=false; //Siwtch Para ver si se inicia el Loop animar
		var imageobj;	//Variable para la imágen planisferio
		var imageobj2; //Variable para imágen máscara
		//Variables para el cambio de escala y posicionamiento del planisferio CIRCULO DE ESTRELLAS QUE GIRA
		var w=0;
		var h=0;
	    var vscale=0;
	    var vleft=0;
	    ////
	    //Varialbles para el cambio de escala y posicionamiento del planisferio MÁSCARA
	    var w2=0;
		var h2=0;
	    var vscale2=0;
	    var vleft2=0;
	    ////
		var centrorot=[0,0]; //Traslación del origen del contexto canvas respecto del inicial. Inicialmente el origen está Arriva a la Izq
		var Scentrorot=[0,0]; //Traslación del origen del contexto canvas respecto del inicial aplicando la escala para poderlo localizar desde fuera del canvas
		var mousex=0; //Posición cursor. Tanto Mouse como Touch
		var mousey=0; //Posición cursor. Tanto Mouse como Touch
		var vtan=0; //tangente para calcular ángulos por medio de coordenadas cartesianas
		var radioact=0; //Longitud del segmento que une el centro rotación con el punto dónde se posiciona el cursor (touch o mouse) Es el Radio de la varariable radioact
		var anguloact=0; //Ángulo del segmento que une el centro rotación con el punto dónde se posiciona el cursor (touch o mouse)
		var anguloant=0; //anguloact del ciclo anterior
		var anguloactJuego=0; 
		var anguloantJuego=0; 
		var anguloinc=0; //Ángulo incremento entre una medida de posición del cursor (touch o mouse) y otra respecto del centro de rotación
		var anguloincJuego=0;
		var anguloplanis=0; //Ángulo acumulado de giro
		var aLoop; //variable para hacer setInterval para el Loop de animación
		var animaLoop; // variable donde se aloja la función de animación
		var juegoEspera;
		var iHorizonte=0; //índice para horizonte "0=Sur o 1=Norte"
		var iLineas=0;  //índice para líneas "0=Bold, 1=Normal o 2=NoMostrar"
		var iNombres=0; //índice para nombre "0=Bold, 1=Normal o 2=NoMostrar"
		var iTamaño=0;  //índice para tamaño foto "Grande o Pequeño"
		var iMascara=0; //índice para "0=Mostrar o 1=NoMostrar" máscara
		var iNocturno=0; //Índice para modo nocturno No=0; Si=1;
		var iJuego=0; //Índice para jugar No=0; Jugando=1; Practicando=2;
		var MatrizPlanisferio; //Matriz para cargar nombres de los archivos de las fotos del planisferio
		var MatrizMascara; //Matriz para cargar nombres de los archivos de las fotos de las máscaras
		var MatrizConstelaciones; //Matriz para localizar las constelaciones en coordenadas polares
		//Medir tiempos entre dos clics para controlar el dobleclick en touch
		var vdate = new Date();
		var vmsecondact =0;
		var vmsecondant =0;
		var vmsecondinc=0;
		//para el juego
		var vtimejuego=60;
		var juegoLoop;
		//
		//var tagjs;
		//Para el juego
		
		var ConstJuego=new Array(); //Vector en el quese guarda la secuencia de las galaxias a encontrar; el campo que se guarda de cada galaxia es su posición en la matriz  MatrizConstelaciones[i]
		var iConstJuego=0; //índice para consultar ConstJuego secuencialmente
		var iNivel=0; //Nivel en el que se está jugando
		var vdesafio=0; //Numero de constelaciones a encontrar en cada nivel
		var txtBorraEspera; // el retardo para los textos en pantalla del juego
		var IntervalLoading;// Interval para ir mostrando Loading foto
		var cronoIntervalLoading; //Para mostrar y no mostrar
		//display en pruevas
		var vTestigo;
		
		
		
		
		//Vars para manejar el ranking
		var txtSingEspera;
		var userplanis=' ';
		var userlevel=0;
		var MatRanking = new Array(5);
		var iPos=0;
		var faltaGrabar=0; //0 no hay presentar grabar 1 si hay que presentar grabar
		
		//localStorage.clear();
		//Download Local estorage
		MatRanking[0]=new Array (2);
		MatRanking[0][0]=localStorage.getItem('userplanis0') || 'empty';
		MatRanking[0][1]=localStorage.getItem('levelplanis0') || 0;
		MatRanking[1]=new Array (2);
		MatRanking[1][0]=localStorage.getItem('userplanis1') || 'empty';
		MatRanking[1][1]=localStorage.getItem('levelplanis1') || 0;
		MatRanking[2]=new Array (2);
		MatRanking[2][0]=localStorage.getItem('userplanis2') || 'empty';
		MatRanking[2][1]=localStorage.getItem('levelplanis2') || 0;
		MatRanking[3]=new Array (2);
		MatRanking[3][0]=localStorage.getItem('userplanis3') || 'empty';
		MatRanking[3][1]=localStorage.getItem('levelplanis3') || 0;
		MatRanking[4]=new Array (2);
		MatRanking[4][0]=localStorage.getItem('userplanis4') || 'empty';
		MatRanking[4][1]=localStorage.getItem('levelplanis4') || 0;
		
		
	//alert(MatRanking[0][0]+MatRanking[0][1]+MatRanking[1][0]+MatRanking[1][1]+MatRanking[2][0]+MatRanking[2][1]+MatRanking[3][0]+MatRanking[3][1]+MatRanking[4][0]+MatRanking[4][1])
		
		//Upload Local estorage
		//localStorage.clear();
		//localStorage.setItem("userplanis0", MatRanking[0][0]);
		//localStorage.setItem("levelplanis0", MatRanking[0][1]);
		//localStorage.setItem("userplanis1", MatRanking[1][0]);
		//localStorage.setItem("levelplanis1", MatRanking[1][1]);
		//localStorage.setItem("userplanis2", MatRanking[2][0]);
		//localStorage.setItem("levelplanis2", MatRanking[2][1]);
		//localStorage.setItem("userplanis3", MatRanking[3][0]);
		//localStorage.setItem("levelplanis3", MatRanking[3][1]);
		//localStorage.setItem("userplanis4", MatRanking[4][0]);
		//localStorage.setItem("levelplanis4", MatRanking[4][1]);

		
		
		//Matriz para cargar nombres de los archivos de las fotos del planisferio
		//La primera dimensión corresponde a los nombres 0=Bold; 1=Normal; 2=NoMostrar; (iNombres)
		//La segunda dimensión corresponde a las líneas 0=Bold; 1=Normal; 2=NoMostrar;
		//La tercera dimensión corresponde a horizonte  0=Sur; 1=Norte;     (iHorizonte)
		//La cuarta dimensión corresponde al tamaño  0=Grande; 1=Pequeño;   (iTamaño)
		MatrizPlanisferio = new Array (3);
		for (i = 0; i < MatrizPlanisferio.length; ++ i){
			MatrizPlanisferio[i] = new Array (3);
			for (j = 0; j < MatrizPlanisferio[i].length; ++ j){
				MatrizPlanisferio[i][j] = new Array (2);
				MatrizPlanisferio[i][j][0]= new Array (2);
				MatrizPlanisferio[i][j][1] = new Array (2);
			}
		};
		//Fotos Grandes
		MatrizPlanisferio[0][0][0][0]="GSurTotBold.png";
		MatrizPlanisferio[0][0][1][0]="GNorteTotBold.png";
		MatrizPlanisferio[0][1][0][0]="GSurNombresBold.png";
		MatrizPlanisferio[0][1][1][0]="GNorteNombresBold.png";
		MatrizPlanisferio[0][2][0][0]="GSurSoloNombresBold.png";
		MatrizPlanisferio[0][2][1][0]="GNorteSoloNombresBold.png";
		MatrizPlanisferio[1][0][0][0]="GSurLineasBold.png";
		MatrizPlanisferio[1][0][1][0]="GNorteLineasBold.png";
		MatrizPlanisferio[1][1][0][0]="GSurTot.png";
		MatrizPlanisferio[1][1][1][0]="GNorteTot.png";
		MatrizPlanisferio[1][2][0][0]="GSurSoloNombres.png";
		MatrizPlanisferio[1][2][1][0]="GNorteSoloNombres.png";
		MatrizPlanisferio[2][0][0][0]="GSurSoloLineasBold.png";
		MatrizPlanisferio[2][0][1][0]="GSurSoloLineasBold.png";   //Es el mismo que el NORTE
		MatrizPlanisferio[2][1][0][0]="GSurSoloLineas.png";
		MatrizPlanisferio[2][1][1][0]="GSurSoloLineas.png"; //Es el mismo que el NORTE
		MatrizPlanisferio[2][2][0][0]="GNada.png";
		MatrizPlanisferio[2][2][1][0]="GNada.png";
		//Fotos Pequeñas
		MatrizPlanisferio[0][0][0][1]="PSurTotBold.png";
		MatrizPlanisferio[0][0][1][1]="PNorteTotBold.png";
		MatrizPlanisferio[0][1][0][1]="PSurNombresBold.png";
		MatrizPlanisferio[0][1][1][1]="PNorteNombresBold.png";
		MatrizPlanisferio[0][2][0][1]="PSurSoloNombresBold.png";
		MatrizPlanisferio[0][2][1][1]="PNorteSoloNombresBold.png";
		MatrizPlanisferio[1][0][0][1]="PSurLineasBold.png";
		MatrizPlanisferio[1][0][1][1]="PNorteLineasBold.png";
		MatrizPlanisferio[1][1][0][1]="PSurTot.png";
		MatrizPlanisferio[1][1][1][1]="PNorteTot.png";
		MatrizPlanisferio[1][2][0][1]="PSurSoloNombres.png";
		MatrizPlanisferio[1][2][1][1]="PNorteSoloNombres.png";
		MatrizPlanisferio[2][0][0][1]="PSurSoloLineasBold.png";
		MatrizPlanisferio[2][0][1][1]="PSurSoloLineasBold.png";   //Es el mismo que el NORTE
		MatrizPlanisferio[2][1][0][1]="PSurSoloLineas.png";
		MatrizPlanisferio[2][1][1][1]="PSurSoloLineas.png"; //Es el mismo que el NORTE
		MatrizPlanisferio[2][2][0][1]="PNada.png";
		MatrizPlanisferio[2][2][1][1]="PNada.png";
		
		//Matriz para cargar nombres de los archivos de las fotos de las máscaras
		//La primer dimensión correponde a Mostrar=0; NoMostrar=1;  (iMascara)
		//La segunda dimensión corresponde a al horizonte 0=Sur; 1=Norte;   (iHorizonte)
		//La tercera dimensión corresponde al tamaño  0=Grande; 1=Pequeño;  (iTamaño)
		MatrizMascara = new Array (2);
	    MatrizMascara[0]=new Array (2);
	    MatrizMascara[1]=new Array (2);
	    MatrizMascara[0][0]=new Array (2);
	    MatrizMascara[0][1]=new Array (2);
	    MatrizMascara[1][0]=new Array (2);
	    MatrizMascara[1][1]=new Array (2);
	    //Máscaras grandes
	    MatrizMascara[0][0][0]="MascSurG.png";
	    MatrizMascara[0][0][1]="MascSurP.png";
	    //Máscaras pequeñas
	    MatrizMascara[0][1][0]="MascNorteG.png";
	    MatrizMascara[0][1][1]="MascNorteP.png";
	    //Para no mostrar se pintan y luego se borran
	    MatrizMascara[1][0][0]="MascSurG.png";
	    MatrizMascara[1][0][1]="MascSurP.png";
	    MatrizMascara[1][1][0]="MascNorteG.png";
	    MatrizMascara[1][1][1]="MascNorteP.png";
	    /////////////////////////////////////////////////
	    //MATRIZ CONSTELACIONES 
	    //HAY 43 CONSTELACIONES EN EL PLANISFERIO
	    MatrizConstelaciones=new Array (43);
	    //Para cada una de ellas (En la segunda Dimensión) Se informa 0=Nombre 1=ÁnguloMínimo 2=ÁnguloMáximo 3=RadioMínimo 4=RadioMáximo
	    //En los casos an los que la constelación deba ser definida con dos trapecios circulares se añadirá  5=ÁnguloMínimo2 6=ÁnguloMáximo2 7=RadioMínimo2 8=RadioMáximo2
	    MatrizConstelaciones[0]   =new Array (5);    //LINCE            
	    MatrizConstelaciones[1]   =new Array (5);    //GÉMINIS          
	    MatrizConstelaciones[2]   =new Array (5);    //CAN MENOR        
	    MatrizConstelaciones[3]   =new Array (5);    //CAN MAYOR        
	    MatrizConstelaciones[4]   =new Array (5);    //CANCER           
	    MatrizConstelaciones[5]   =new Array (5);    //HIDRA            
	    MatrizConstelaciones[6]   =new Array (5);    //OSA MAYOR        
	    MatrizConstelaciones[7]   =new Array (5);    //LEO              
	    MatrizConstelaciones[8]   =new Array (5);    //CRATER           
	    MatrizConstelaciones[9]   =new Array (5);    //PERROS DE CAZA   
	    MatrizConstelaciones[10]  =new Array (5);    //VIRGO            
	    MatrizConstelaciones[11]  =new Array (5);    //CUERVO           
	    MatrizConstelaciones[12]  =new Array (8);    //OSA MENOR        
	    MatrizConstelaciones[13]  =new Array (5);    //DRAGÓN                          
	    MatrizConstelaciones[14]  =new Array (5);    //BOYERO           
	    MatrizConstelaciones[15]  =new Array (5);    //LIBRA            
	    MatrizConstelaciones[16]  =new Array (5);    //CORONA BOREAL    
	    MatrizConstelaciones[17]  =new Array (5);    //SERPIENTE        
	    MatrizConstelaciones[18]  =new Array (5);    //HÉRCULES         
	    MatrizConstelaciones[19]  =new Array (5);    //OFICUO           
	    MatrizConstelaciones[20]  =new Array (5);    //LIRA             
	    MatrizConstelaciones[21]  =new Array (5);    //ESCUDO           
	    MatrizConstelaciones[22]  =new Array (5);    //SAGITARIO        
	    MatrizConstelaciones[23]  =new Array (5);    //CISNE            
	    MatrizConstelaciones[24]  =new Array (5);    //FLECHA           
	    MatrizConstelaciones[25]  =new Array (5);    //ÁGUILA           
	    MatrizConstelaciones[26]  =new Array (5);    //DELFÍN           
	    MatrizConstelaciones[27]  =new Array (5);    //CAPRICORNIO      
	    MatrizConstelaciones[28]  =new Array (5);    //CEFEO            
	    MatrizConstelaciones[29]  =new Array (5);    //LAGARTO          
	    MatrizConstelaciones[30]  =new Array (5);    //PEGASO           
	    MatrizConstelaciones[31]  =new Array (5);    //ACUARIO          
	    MatrizConstelaciones[32]  =new Array (5);    //CASIOPEA         
	    MatrizConstelaciones[33]  =new Array (5);    //ANDRÓMEDA        
	    MatrizConstelaciones[34]  =new Array (5);    //PISCIS           
	    MatrizConstelaciones[35]  =new Array (5);    //BALLENA          
	    MatrizConstelaciones[36]  =new Array (5);    //ARIES            
	    MatrizConstelaciones[37]  =new Array (5);    //PERSEO           
	    MatrizConstelaciones[38]  =new Array (5);    //TAURO            
	    MatrizConstelaciones[39]  =new Array (5);    //ERIDANUS         
	    MatrizConstelaciones[40]  =new Array (5);    //AURIGA           
	    MatrizConstelaciones[41]  =new Array (8);    //ORIÓN            
	    MatrizConstelaciones[42]  =new Array (8);    //LIEBRE                                                              
	    //NOMBRE                                                      
	    MatrizConstelaciones[0]  [0]='LINCE';        	   //LINCE           
	    MatrizConstelaciones[1]  [0]='GÉMINIS';            //GÉMINIS   
	    MatrizConstelaciones[2]  [0]='CAN MENOR';          //CAN MENOR 
	    MatrizConstelaciones[3]  [0]='CAN MAYOR';          //CAN MAYOR 
	    MatrizConstelaciones[4]  [0]='CANCER';             //CANCER    
	    MatrizConstelaciones[5]  [0]='HIDRA';              //HIDRA     
	    MatrizConstelaciones[6]  [0]='OSA MAYOR';          //OSA MAYOR 
	    MatrizConstelaciones[7]  [0]='LEO';                //LEO       
	    MatrizConstelaciones[8]  [0]='CRATER';             //CRATER    
	    MatrizConstelaciones[9]  [0]='PERROS DE CAZA';     //PERROS DE 
	    MatrizConstelaciones[10] [0]='VIRGO';              //VIRGO     
	    MatrizConstelaciones[11] [0]='CUERVO';             //CUERVO    
	    MatrizConstelaciones[12] [0]='OSA MENOR';          //OSA MENOR 
	    MatrizConstelaciones[13] [0]='DRAGÓN';             //DRAGÓN                  
	    MatrizConstelaciones[14] [0]='BOYERO';             //BOYERO    
	    MatrizConstelaciones[15] [0]='LIBRA';              //LIBRA     
	    MatrizConstelaciones[16] [0]='CORONA BOREAL';      //CORONA BOR
	    MatrizConstelaciones[17] [0]='SERPIENTE';          //SERPIENTE 
	    MatrizConstelaciones[18] [0]='HÉRCULES';           //HÉRCULES  
	    MatrizConstelaciones[19] [0]='OFICUO';             //OFICUO    
	    MatrizConstelaciones[20] [0]='LIRA';               //LIRA      
	    MatrizConstelaciones[21] [0]='ESCUDO';             //ESCUDO    
	    MatrizConstelaciones[22] [0]='SAGITARIO';          //SAGITARIO 
	    MatrizConstelaciones[23] [0]='CISNE';              //CISNE     
	    MatrizConstelaciones[24] [0]='FLECHA';             //FLECHA    
	    MatrizConstelaciones[25] [0]='ÁGUILA';             //ÁGUILA    
	    MatrizConstelaciones[26] [0]='DELFÍN';             //DELFÍN    
	    MatrizConstelaciones[27] [0]='CAPRICORNIO';        //CAPRICORNI
	    MatrizConstelaciones[28] [0]='CEFEO';              //CEFEO     
	    MatrizConstelaciones[29] [0]='LAGARTO';            //LAGARTO   
	    MatrizConstelaciones[30] [0]='PEGASO';             //PEGASO    
	    MatrizConstelaciones[31] [0]='ACUARIO';            //ACUARIO   
	    MatrizConstelaciones[32] [0]='CASIOPEA';           //CASIOPEA  
	    MatrizConstelaciones[33] [0]='ANDRÓMEDA';          //ANDRÓMEDA 
	    MatrizConstelaciones[34] [0]='PISCIS';             //PISCIS    
	    MatrizConstelaciones[35] [0]='BALLENA';            //BALLENA   
	    MatrizConstelaciones[36] [0]='ARIES';              //ARIES     
	    MatrizConstelaciones[37] [0]='PERSEO';             //PERSEO    
	    MatrizConstelaciones[38] [0]='TAURO';              //TAURO     
	    MatrizConstelaciones[39] [0]='ERIDANUS';           //ERIDANUS   
	    MatrizConstelaciones[40] [0]='AURIGA';             //AURIGA    
	    MatrizConstelaciones[41] [0]='ORIÓN';              //ORIÓN     
	    MatrizConstelaciones[42] [0]='LIEBRE';             //LIEBRE        
	    //ÁNGULO MÍNIMO                                         
		MatrizConstelaciones[0]  [1]=0;              //LINCE     
	    MatrizConstelaciones[1]  [1]=2;  	         //GÉMINIS   
	    MatrizConstelaciones[2]  [1]=15;             //CAN MENOR 
	    MatrizConstelaciones[3]  [1]=2;              //CAN MAYOR 
	    MatrizConstelaciones[4]  [1]=28;             //CANCER    
	    MatrizConstelaciones[5]  [1]=38;             //HIDRA     
	    MatrizConstelaciones[6]  [1]=33;             //OSA MAYOR 
	    MatrizConstelaciones[7]  [1]=52;             //LEO       
	    MatrizConstelaciones[8]  [1]=71;             //CRATER    
	    MatrizConstelaciones[9]  [1]=90;             //PERROS DE 
	    MatrizConstelaciones[10] [1]=85;             //VIRGO     
	    MatrizConstelaciones[11] [1]=88;             //CUERVO    
	    MatrizConstelaciones[12] [1]=122;            //OSA MENOR 
	    MatrizConstelaciones[13] [1]=76;             //DRAGÓN    
	    MatrizConstelaciones[14] [1]=116;            //BOYERO    
	    MatrizConstelaciones[15] [1]=128;            //LIBRA   
	    MatrizConstelaciones[16] [1]=135;            //CORONA BOR
	    MatrizConstelaciones[17] [1]=141;            //SERPIENTE 
	    MatrizConstelaciones[18] [1]=151;            //HÉRCULES  
	    MatrizConstelaciones[19] [1]=151;            //OFICUO    
	    MatrizConstelaciones[20] [1]=183;            //LIRA      
	    MatrizConstelaciones[21] [1]=182;            //ESCUDO    
	    MatrizConstelaciones[22] [1]=190;            //SAGITARIO 
	    MatrizConstelaciones[23] [1]=195;            //CISNE     
	    MatrizConstelaciones[24] [1]=200;            //FLECHA    
	    MatrizConstelaciones[25] [1]=192;            //ÁGUILA    
	    MatrizConstelaciones[26] [1]=211;            //DELFÍN    
	    MatrizConstelaciones[27] [1]=211;            //CAPRICORNI
	    MatrizConstelaciones[28] [1]=220;            //CEFEO     
	    MatrizConstelaciones[29] [1]=239;            //LAGARTO   
	    MatrizConstelaciones[30] [1]=232;            //PEGASO    
	    MatrizConstelaciones[31] [1]=219;            //ACUARIO   
	    MatrizConstelaciones[32] [1]=262;            //CASIOPEA  
	    MatrizConstelaciones[33] [1]=268;            //ANDRÓMEDA 
	    MatrizConstelaciones[34] [1]=255;            //PISCIS    
	    MatrizConstelaciones[35] [1]=271;            //BALLENA   
	    MatrizConstelaciones[36] [1]=292;            //ARIES     
	    MatrizConstelaciones[37] [1]=305;            //PERSEO 
	    MatrizConstelaciones[38] [1]=317;            //TAURO     
	    MatrizConstelaciones[39] [1]=308;            //ERIDANUS  
	    MatrizConstelaciones[40] [1]=339;            //AURIGA    
	    MatrizConstelaciones[41] [1]=339;            //ORIÓN     
	    MatrizConstelaciones[42] [1]=343;            //LIEBRE    
	    //ÁNGULO MÁXIMO                             
	      
	    MatrizConstelaciones[0]  [2]=50;            //LINCE     
	    MatrizConstelaciones[1]  [2]=28;            //GÉMINIS   
	    MatrizConstelaciones[2]  [2]=30;            //CAN MENOR 
	    MatrizConstelaciones[3]  [2]=19;            //CAN MAYOR 
	    MatrizConstelaciones[4]  [2]=52;            //CANCER    
	    MatrizConstelaciones[5]  [2]=76;            //HIDRA     
	    MatrizConstelaciones[6]  [2]=120;           //OSA MAYOR 
	    MatrizConstelaciones[7]  [2]=90;            //LEO       
	    MatrizConstelaciones[8]  [2]=85;            //CRATER    
	    MatrizConstelaciones[9]  [2]=112;           //PERROS DE 
	    MatrizConstelaciones[10] [2]=133;           //VIRGO     
	    MatrizConstelaciones[11] [2]=103;           //CUERVO    
	    MatrizConstelaciones[12] [2]=180;           //OSA MENOR 
	    MatrizConstelaciones[13] [2]=210;           //DRAGÓN    
	    MatrizConstelaciones[14] [2]=142;           //BOYERO    
	    MatrizConstelaciones[15] [2]=150;           //LIBRA     
	    MatrizConstelaciones[16] [2]=155;           //CORONA BOR
	    MatrizConstelaciones[17] [2]=154;           //SERPIENTE 
	    MatrizConstelaciones[18] [2]=184;           //HÉRCULES  
	    MatrizConstelaciones[19] [2]=186;           //OFICUO    
	    MatrizConstelaciones[20] [2]=200;           //LIRA      
	    MatrizConstelaciones[21] [2]=196;           //ESCUDO    
	    MatrizConstelaciones[22] [2]=204;           //SAGITARIO 
	    MatrizConstelaciones[23] [2]=231;           //CISNE     
	    MatrizConstelaciones[24] [2]=215;           //FLECHA    
	    MatrizConstelaciones[25] [2]=215;           //ÁGUILA    
	    MatrizConstelaciones[26] [2]=225;           //DELFÍN    
	    MatrizConstelaciones[27] [2]=239;           //CAPRICORNI
	    MatrizConstelaciones[28] [2]=272;           //CEFEO     
	    MatrizConstelaciones[29] [2]=253;           //LAGARTO   
	    MatrizConstelaciones[30] [2]=275;           //PEGASO    
	    MatrizConstelaciones[31] [2]=259;           //ACUARIO   
	    MatrizConstelaciones[32] [2]=304;           //CASIOPEA  
	    MatrizConstelaciones[33] [2]=305;           //ANDRÓMEDA 
	    MatrizConstelaciones[34] [2]=301;           //PISCIS    
	    MatrizConstelaciones[35] [2]=318;           //BALLENA   
	    MatrizConstelaciones[36] [2]=317;           //ARIES     
	    MatrizConstelaciones[37] [2]=335;           //PERSEO    
	    MatrizConstelaciones[38] [2]=357;           //TAURO     
	    MatrizConstelaciones[39] [2]=348;           //ERIDANUS  
	    MatrizConstelaciones[40] [2]=360;           //AURIGA    
	    MatrizConstelaciones[41] [2]=360;           //ORIÓN     
	    MatrizConstelaciones[42] [2]=360;           //LIEBRE    
	    //RADIO MÍNIMO
		MatrizConstelaciones[0]  [3]=0.30;          //LINCE     
	    MatrizConstelaciones[1]  [3]=0.45;          //GÉMINIS   
	    MatrizConstelaciones[2]  [3]=0.63;          //CAN MENOR 
	    MatrizConstelaciones[3]  [3]=0.75;          //CAN MAYOR 
	    MatrizConstelaciones[4]  [3]=0.47;          //CANCER    
	    MatrizConstelaciones[5]  [3]=0.7;           //HIDRA     
	    MatrizConstelaciones[6]  [3]=0.13;          //OSA MAYOR 
	    MatrizConstelaciones[7]  [3]=0.5;          //LEO       
	    MatrizConstelaciones[8]  [3]=0.78;          //CRATER    
	    MatrizConstelaciones[9]  [3]=0.33;           //PERROS DE 
	    MatrizConstelaciones[10] [3]=0.67;          //VIRGO     
	    MatrizConstelaciones[11] [3]=0.85;           //CUERVO    
	    MatrizConstelaciones[12] [3]=0;             //OSA MENOR 
	    MatrizConstelaciones[13] [3]=0.13;          //DRAGÓN    
	    MatrizConstelaciones[14] [3]=0.4;           //BOYERO    
	    MatrizConstelaciones[15] [3]=0.83;          //LIBRA     
	    MatrizConstelaciones[16] [3]=0.45;          //CORONA BOR
	    MatrizConstelaciones[17] [3]=0.6;           //SERPIENTE 
	    MatrizConstelaciones[18] [3]=0.36;          //HÉRCULES  
	    MatrizConstelaciones[19] [3]=0.65;          //OFICUO    
	    MatrizConstelaciones[20] [3]=0.4;          //LIRA      
	    MatrizConstelaciones[21] [3]=0.78;          //ESCUDO    
	    MatrizConstelaciones[22] [3]=0.85;          //SAGITARIO 
	    MatrizConstelaciones[23] [3]=0.30;          //CISNE     
	    MatrizConstelaciones[24] [3]=0.55;          //FLECHA    
	    MatrizConstelaciones[25] [3]=0.65;          //ÁGUILA    
	    MatrizConstelaciones[26] [3]=0.6;          //DELFÍN    
	    MatrizConstelaciones[27] [3]=0.83;          //CAPRICORNI
	    MatrizConstelaciones[28] [3]=0.09;          //CEFEO     
	    MatrizConstelaciones[29] [3]=0.31;          //LAGARTO   
	    MatrizConstelaciones[30] [3]=0.47;          //PEGASO    
	    MatrizConstelaciones[31] [3]=0.75;          //ACUARIO   
	    MatrizConstelaciones[32] [3]=0.2;           //CASIOPEA  
	    MatrizConstelaciones[33] [3]=0.38;          //ANDRÓMEDA 
	    MatrizConstelaciones[34] [3]=0.54;          //PISCIS    
	    MatrizConstelaciones[35] [3]=0.65;          //BALLENA   
	    MatrizConstelaciones[36] [3]=0.48;           //ARIES     
	    MatrizConstelaciones[37] [3]=0.25;          //PERSEO    
	    MatrizConstelaciones[38] [3]=0.5;           //TAURO     
	    MatrizConstelaciones[39] [3]=0.79;          //ERIDANUS  
	    MatrizConstelaciones[40] [3]=0.33;          //AURIGA    
	    MatrizConstelaciones[41] [3]=0.62;          //ORIÓN     
	    MatrizConstelaciones[42] [3]=0.85;          //LIEBRE    
	    //RADIO MÁXIMO
		MatrizConstelaciones[0]  [4]=0.5;           //LINCE     
	    MatrizConstelaciones[1]  [4]=0.7;           //GÉMINIS   
	    MatrizConstelaciones[2]  [4]=0.83;          //CAN MENOR 
	    MatrizConstelaciones[3]  [4]=1.12;           //CAN MAYOR 
	    MatrizConstelaciones[4]  [4]=0.76;          //CANCER    
	    MatrizConstelaciones[5]  [4]=1;             //HIDRA     
	    MatrizConstelaciones[6]  [4]=0.52;          //OSA MAYOR 
	    MatrizConstelaciones[7]  [4]=0.77;          //LEO       
	    MatrizConstelaciones[8]  [4]=1.2;             //CRATER    
	    MatrizConstelaciones[9]  [4]=0.52;           //PERROS DE 
	    MatrizConstelaciones[10] [4]=0.9;           //VIRGO     
	    MatrizConstelaciones[11] [4]=1.2;             //CUERVO    
	    MatrizConstelaciones[12] [4]=0.18;          //OSA MENOR 
	    MatrizConstelaciones[13] [4]=0.35;          //DRAGÓN    
	    MatrizConstelaciones[14] [4]=0.7 ;          //BOYERO    
	    MatrizConstelaciones[15] [4]=1.1;             //LIBRA     
	    MatrizConstelaciones[16] [4]=0.64;           //CORONA BOR
	    MatrizConstelaciones[17] [4]=0.85;          //SERPIENTE 
	    MatrizConstelaciones[18] [4]=0.67;          //HÉRCULES  
	    MatrizConstelaciones[19] [4]=0.97;          //OFICUO    
	    MatrizConstelaciones[20] [4]=0.56;          //LIRA      
	    MatrizConstelaciones[21] [4]=0.93;          //ESCUDO    
	    MatrizConstelaciones[22] [4]=1;             //SAGITARIO 
	    MatrizConstelaciones[23] [4]=0.57;          //CISNE     
	    MatrizConstelaciones[24] [4]=0.7;          //FLECHA    
	    MatrizConstelaciones[25] [4]=0.87;          //ÁGUILA    
	    MatrizConstelaciones[26] [4]=0.78;          //DELFÍN    
	    MatrizConstelaciones[27] [4]=1;             //CAPRICORNI
	    MatrizConstelaciones[28] [4]=0.31;          //CEFEO     
	    MatrizConstelaciones[29] [4]=0.47;          //LAGARTO   
	    MatrizConstelaciones[30] [4]=0.76;          //PEGASO    
	    MatrizConstelaciones[31] [4]=0.98;          //ACUARIO   
	    MatrizConstelaciones[32] [4]=0.35;          //CASIOPEA  
	    MatrizConstelaciones[33] [4]=0.56;          //ANDRÓMEDA 
	    MatrizConstelaciones[34] [4]=0.82;          //PISCIS    
	    MatrizConstelaciones[35] [4]=1;             //BALLENA   
	    MatrizConstelaciones[36] [4]=0.66;          //ARIES     
	    MatrizConstelaciones[37] [4]=0.54;          //PERSEO    
	    MatrizConstelaciones[38] [4]=0.73;           //TAURO     
	    MatrizConstelaciones[39] [4]=1;             //ERIDANUS  
	    MatrizConstelaciones[40] [4]=0.58;          //AURIGA    
	    MatrizConstelaciones[41] [4]=0.9;           //ORIÓN     
	    MatrizConstelaciones[42] [4]=1.2;             //LIEBRE    
		 //ÁNGULO MÍNIMO2                                         
		MatrizConstelaciones[12]  [5]=0;        //OSA MENOR      
	    MatrizConstelaciones[41]  [5]=0;  	    //Orión  
	    MatrizConstelaciones[42]  [5]=0;        //Liebre  
		//ÁNGULO MÁXIMO2                             
	    MatrizConstelaciones[12]  [6]=360;      //OSA MENO
	    MatrizConstelaciones[41]  [6]=3;        //Orión  
	    MatrizConstelaciones[42]  [6]=4;        //Liebre  
	     //RADIO MÍNIMO2
		MatrizConstelaciones[12]  [7]=0;        //OSA MENO
	    MatrizConstelaciones[41]  [7]=0.33;     //Orión  
	    MatrizConstelaciones[42]  [7]=0.62;     //Liebre  
	     //RADIO MÁXIMO2
		MatrizConstelaciones[12]  [8]=0.1;     //OSA MENO
	    MatrizConstelaciones[41]  [8]=0.53;     //Orión  
	    MatrizConstelaciones[42]  [8]=0.76;     //Liebre  
	    //Paso ángulos a radianes
	   	for (i = 0; i < MatrizConstelaciones.length; ++ i){		
			   	vTestigo=MatrizConstelaciones[i][1]=vTestigo=MatrizConstelaciones[i][1]*Math.PI/180;
				vTestigo=MatrizConstelaciones[i][2]=vTestigo=MatrizConstelaciones[i][2]*Math.PI/180;
				if (MatrizConstelaciones.length>5){
					vTestigo=MatrizConstelaciones[i][5]=vTestigo=MatrizConstelaciones[i][5]*Math.PI/180;
					vTestigo=MatrizConstelaciones[i][6]=vTestigo=MatrizConstelaciones[i][6]*Math.PI/180;		
				};	
		};
	//$(document).ready(function($){

	
$(document).on("pageinit","#pantalla",function(){

		//$("#xSignRanking").click();
		$("#popSignking").popup( "close" );
		$("#BSignRanking").hide();
		
		$('#pantallac').append( '<canvas id="c" style="position: absolute;">Your browser does not support the canvas element.</canvas>' );
		c = document.getElementById('c');
		ctx = c.getContext('2d');
		$('#pantallac').append( '<canvas id="c2" style="position: absolute;">Your browser does not support the canvas element.</canvas>' );
		c2 = document.getElementById('c2');
		ctx2 = c2.getContext('2d');
		$('#pantallac').append( '<canvas id="cLoading" style="position: absolute;">Your browser does not support the canvas element.</canvas>' );
		cLoading = document.getElementById('cLoading');
		ctxLoading = cLoading.getContext('2d');
		$('#pantallac').append( '<canvas id="ct" style="position: absolute;">Your browser does not support the canvas element.</canvas>' );
		ct = document.getElementById('ct');
		ctxt = ct.getContext('2d');
		pantallat=function(){};
		$('#pantallac').append( '<canvas id="c3" style="position: absolute;">Your browser does not support the canvas element.</canvas>' );
		c3 = document.getElementById('c3');
		ctx3 = c3.getContext('2d');
		$('#pantallac').append( '<div id="divBotJuego" style="position:absolute;height:0"></div>');
		pantalla3=function(){};

	
		
	
		
		
		DimensionPosicionFotos ();
	 $( window ).on('resize',function() {DimensionPosicionFotos ()});
	//document.addEventListener('mousedown',function(e){
	$('#pantalla').on({ 'vmousedown' : function(e){ 
		swpulsado=true;
		swanimar=false;
	}});    
	 
	// document.addEventListener('mouseup',function(e){
	$('#pantalla').on({ 'vmouseup' : function(e){ 
		swpulsado=false;
		swanimar=false;
		//quitar el intervalo de repetició
		clearInterval(aLoop)
	 }});  
	 
	$('#c3').on({ 'vmouseout' : function(e){ 
	    swanimar=false;
	    //quitar el intervalo de repetición
	    clearInterval(aLoop)
	   }}); 
	   
//c2.addEventListener('mousemove',function(e){
$('#c3').on({ 'vmousemove' : function(e){ 
e.originalEvent.preventDefault()
if(swpulsado==true){

	
	mousex=e.pageX-c.offsetLeft-Scentrorot[0]+ $('#pantallaG').scrollLeft();
	mousey=e.pageY-c.offsetTop-Scentrorot[1]+ $('#pantallaG').scrollTop();
	vtan=(mousey/mousex);
	anguloact=Math.atan(vtan);
	        //El sentido de giro se encuentra invertido ( porque el eje Y esta invertido)
	        //atan() Solo devuelve ángulos entre pi/2 y -pi/2 (primer y cuarto cuadrante).
	        //Paso el ángulo a valor positivo entre 0 y 2pi
			if(mousex<0){
				//Lo mando al segundo y tercer cuadrante
		        anguloact+=Math.PI;
	        } else{
	           //Cuarto cuadrante en positivo
	            if(mousex>0 && mousey<0){
	                anguloact+=2*Math.PI;
	            };
	        };
		if(swanimar==false){
	        anguloant=anguloact
			swanimar=true;
			aLoop=setInterval(function(){animaLoop()},20);
       }
}
			/*
			//Pintar testigo en canvas 
			i+=1;
			ctx2.clearRect(75, 75, 300, 25);
			ctx2.fillStyle = "white";
			ctx2.font = "bold 16px Arial";
			ctx2.fillText(e.pageX, 100, 100)  
			 */
}});  
 
$( "#botHorizonte" ).bind( "vclick", function(e) {
	if (iHorizonte==1){
		iHorizonte=0;
	}else{
		iHorizonte+=1;
	};
	if (iMascara==1){
		iMascara=0;
	}
	DimensionPosicionFotos ();
});
$( "#botLineas" ).bind( "vclick", function() {
	if (iLineas==2){
		iLineas=0;
	}else{
		iLineas+=1;
	};
	 DimensionPosicionFotos ();
});
$( "#botNombres" ).bind( "vclick", function() {
if (iNombres==2){
		iNombres=0;
	}else{
		iNombres+=1;
	};
	DimensionPosicionFotos ();

});
$( "#botMascara" ).bind( "vclick", function() {
	if (iMascara==1){
		iMascara=0;
	}else{
		iMascara+=1;
	};
	DimensionPosicionFotos ();
});
$( "#botNocturno" ).bind( "vclick", function() {
if (iNocturno==1){
		iNocturno=0;
	}else{
		iNocturno+=1
	};
	DimensionPosicionFotos ();
});

$( "#botDefault" ).bind( "vclick", function() {
	iHorizonte=0;
	iLineas=0; 
	iNombres=0;
	iMascara=0; 
	iNocturno=0;
	DimensionPosicionFotos ();
});


$( "#botJuego" ).bind( "vclick", function() {
 $('#botCerrar').trigger('click')
	acabaJuego();
	iJuego=1;
	disparaJuego();
});

$( "#botEntrena" ).bind( "vclick", function() {
 $('#botCerrar').trigger('click')
	acabaJuego();
	iJuego=2;
	disparaJuego();
});

$( "#botRanking" ).bind( "vclick", function() {
 //$('#botCerrar').trigger('click');
	$.mobile.changePage($("#pantalla2"));
	$("#rankfield00").text(MatRanking[0][0]);
	$("#rankfield01").text(MatRanking[0][1]);
	$("#rankfield10").text(MatRanking[1][0]);
	$("#rankfield11").text(MatRanking[1][1]);
	$("#rankfield20").text(MatRanking[2][0]);
	$("#rankfield21").text(MatRanking[2][1]);
	$("#rankfield30").text(MatRanking[3][0]);
	$("#rankfield31").text(MatRanking[3][1]);
	$("#rankfield40").text(MatRanking[4][0]);
	$("#rankfield41").text(MatRanking[4][1]);

});


});

/*
$(document).on("pageinit","#pantalla2",function(){
 $('#pantalla2c').append( '<div class="ui-grid-a">'+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">POSICIÓN</div></div>          '+
    '<div class="ui-block-b" style="width:60%" ><div class="ui-bar ui-bar-c" style="height:2em">NOMBRE</div></div>            '+
    '<div class="ui-block-c" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">NIVEL</div></div>             '+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">1</div></div>                 '+
    '<div class="ui-block-b" style="width:60%" ><div id="rankfield00" class="ui-bar ui-bar-c" style="height:2em"></div></div>  '+
    '<div class="ui-block-c" style="width:20%" ><div id="rankfield01" class="ui-bar ui-bar-c" style="height:2em"></div></div>  '+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">2</div></div>                 '+
    '<div class="ui-block-b" style="width:60%" ><div id="rankfield10" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[1][0]+'</div></div>  '+
    '<div class="ui-block-c" style="width:20%" ><div id="rankfield11" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[1][1]+'</div></div>  '+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">3</div></div>                 '+
    '<div class="ui-block-b" style="width:60%" ><div id="rankfield20" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[2][0]+'</div></div>  '+
    '<div class="ui-block-c" style="width:20%" ><div id="rankfield21" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[2][1]+'</div></div>  '+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">4</div></div>                 '+
    '<div class="ui-block-b" style="width:60%" ><div id="rankfield30" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[3][0]+'</div></div>  '+
    '<div class="ui-block-c" style="width:20%" ><div id="rankfield31" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[3][1]+'</div></div>  '+
    '<div class="ui-block-a" style="width:20%" ><div class="ui-bar ui-bar-c" style="height:2em">5</div></div>                 '+
    '<div class="ui-block-b" style="width:60%" ><div id="rankfield40" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[4][0]+'</div></div>  '+
    '<div class="ui-block-c" style="width:20%" ><div id="rankfield41" class="ui-bar ui-bar-c" style="height:2em">'+MatRanking[4][1]+'</div></div>  '+
    
    '</div>'
    )

});
*/
function DimensionPosicionFotos () {
	   imageobj = new Image();
	   imageobj2 = new Image();
	  
	   if ($(window).innerWidth()<=400 || $(window).innerHeight()<=400){
			iTamaño=1;
	   }else{
	        iTamaño=0;
	   };
	   //if (	sjugando==true){
	   if(iJuego==1){
			iNombres=2; 
			iMascara=1;
	   };
	   if(iJuego==2){
	        iLineas=0;
			iNombres=0; 
			iMascara=1;
	   };
	   imageobj.src = 'images/'+MatrizPlanisferio[iNombres][iLineas][iHorizonte][iTamaño];
	   imageobj2.src = 'images/'+MatrizMascara[iMascara][iHorizonte][iTamaño];
	   
	   
	    $('#cLoading').css('left', 0);
	    $('#cLoading').css('top', 0);
	  	    
		clearInterval(IntervalLoading);
		cronoIntervalLoading=0; //Positivo Muestra // Negativo No muestra
		ctxLoading.canvas.width = $(window).innerWidth()*0.8;
		ctxLoading.canvas.height = $(window).innerHeight()*0.8;
		ctxLoading.fillStyle = "orange";
		ctxLoading.font = "bold 4em Arial";
		if (iTamaño==1){
			ctxLoading.font = "bold 2em Arial";
		};
		ctxLoading.textAlign="center";
		ctxLoading.fillText('LOADING', $(window).innerWidth()*0.5 , $(window).innerHeight()*0.5);
		IntervalLoading=setInterval(function(){
			if (cronoIntervalLoading==0){
				ctxLoading.canvas.width = $(window).innerWidth()*0.8;
				ctxLoading.canvas.height = $(window).innerHeight()*0.8;
				ctxLoading.fillStyle = "orange";
				ctxLoading.font = "bold 4em Arial";
				if (iTamaño==1){
					ctxLoading.font = "bold 2em Arial";
			    };
				ctxLoading.textAlign="center";
				ctxLoading.fillText('LOADING', $(window).innerWidth()*0.5 , $(window).innerHeight()*0.5);
			};
			if (cronoIntervalLoading==4){
				ctxLoading.canvas.width = $(window).innerWidth()*0.8;
				ctxLoading.canvas.height = $(window).innerHeight()*0.8;
			};
			if (cronoIntervalLoading==6){
				cronoIntervalLoading=-1;
			};
			cronoIntervalLoading+=1;
		}, 100);
		
		       

	   //LOS TAMAÑOS DE LAS IMÁGENES SON IGUALES DE TAMAÑO, PERO HAGO EL PROCESO POR PARALELO Y LOS MISMOS CÁLCULOS.
	   imageobj.onload = function() {
		   ctx.canvas.width = this.width;
		   ctx.canvas.height = this.height;
		   //le quito dos veces 0.01*$(window).innerWidth() como margen mínimo a los lados
	       w=($(window).innerWidth()*0.98)/ctx.canvas.width;
		   h=($(window).innerHeight()-1.25*c.offsetTop)/ctx.canvas.height;  
	       //vscale=Math.min(h,w);
	       if (h<w){
				vscale=h;
		        vleft=($(window).innerWidth()-c.width*vscale)/2;
		        $('#c').css('left', vleft);
			}else{
		        vscale=w;
		        $('#c').css('left', $(window).innerWidth()*0.01);
			};
	       c.style.width=(c.width*vscale)+'px';
	       c.style.height=(c.height*vscale)+'px';
	       ctx.translate(this.width/2,this.height/2)
	       if (anguloplanis!=0){
	   
	           ctx.rotate(anguloplanis);
	       }
	       ctx.drawImage(imageobj, -this.width/2, -this.height/2);
	       centrorot[0] = this.width/2;
	       centrorot[1] = this.height/2;
	       Scentrorot[0]=vscale*centrorot[0];
		   Scentrorot[1]=vscale*centrorot[1];
       };
  
      imageobj2.onload = function() {
        clearInterval(IntervalLoading);
		ctxLoading.canvas.width = 0;
		ctxLoading.canvas.height = 0;
				
		  ctx2.canvas.width = this.width
		  ctx2.canvas.height = this.height
		  w2=($(window).innerWidth()*0.98)/ctx2.canvas.width;
		  h2=($(window).innerHeight()-1.25*c2.offsetTop)/ctx2.canvas.height;  
		  //vscale2=Math.min(h2,w2);
		  if (h2<w2){
				vscale2=h2;
		        vleft2=($(window).innerWidth()-c2.width*vscale2)/2;
		        $('#c2').css('left', vleft2);
			}else{
		        vscale2=w2;
	            $('#c2').css('left', $(window).innerWidth()*0.01);
			};
		  c2.style.width=(c2.width*vscale2)+'px';
	      c2.style.height=(c2.height*vscale2)+'px';
		  ctx2.translate(this.width/2,this.height/2)
		  ctx2.drawImage(imageobj2, -this.width/2, -this.height/2);
		  if (iMascara==1){
		    ctx2.clearRect(-this.width/2, -this.height/2, this.width, this.height);
		  };
		  if (iNocturno==1){
			ctx2.fillStyle = "rgba(255, 0, 0, 0.5)";
			ctx2.fillRect(-this.width/2, -this.height/2, this.width, this.height); 
		 }
	    //if($("#c3").length > 0) {
		ctx3.canvas.width = ctx2.canvas.width;
		ctx3.canvas.height = ctx2.canvas.height;
		$('#c3').css('left',  $('#c2').css('left'))
		c3.style.width=c2.style.width;
	    c3.style.height=c2.style.height;
		ctx3.translate(ctx3.canvas.width/2,ctx3.canvas.height/2);
		//if($("#divBotJuego").length > 0) {
		$("#divBotJuego").css({'width':$('#c3').css('width'),'left':$('#c3').css('left'),'top':$('#c3').css('top')})
		pantalla3();
		
		ctxt.canvas.width = ctx2.canvas.width;
		ctxt.canvas.height = ctx2.canvas.height;
		$('#ct').css('left',  $('#c2').css('left'))
		ct.style.width=c2.style.width;
	    ct.style.height=c2.style.height;
		ctxt.translate(ctxt.canvas.width/2,ctxt.canvas.height/2);
		pantallat();
	  };
};
function animaLoop () {
	  ctx.drawImage(imageobj, -centrorot[0], -centrorot[1]);
	    anguloinc=anguloact-anguloant;
         anguloant=anguloact;
		if (anguloinc>0.05 || anguloinc<-0.05){
		//Roto por el camino mas corto
		        if(anguloinc < - Math.PI){
	            anguloinc=anguloinc+2*Math.PI
	            }
                if(anguloinc > Math.PI){
                anguloinc=anguloinc-2*Math.PI
                }	
		}else{
			//para amplitudes pequeña se rota día a día
			if (anguloinc>0.001 || anguloinc<-0.001){
					if(anguloinc<0){
					anguloinc=-0.0172;
					}else{
					anguloinc=0.0172;
					};
				}else{
					anguloinc=0;
			};
		};
	
		ctx.rotate(anguloinc);
		anguloplanis+=anguloinc;
		//Mantengo el ángulo entre cero y 2pi
		if (anguloplanis>=2*Math.PI){
			anguloplanis-=2*Math.PI;
		}else{
			if (anguloplanis<0){
			anguloplanis+=2*Math.PI;
			}
		}
		/*
		ctx2.clearRect(75, 75, 300, 25);
		ctx2.fillStyle = "white";
        ctx2.font = "bold 16px Arial";
        ctx2.fillText(anguloinc, 100, 100)   
		*/


};


function disparaJuego(){

	pantalla3=function(){};
	pantallat=function(){};
	$('#divBotJuego').append( '<a href="#" id="BotJuegoCerr" style="position:relative;float:right;">Delete</a>');
	$('#divBotJuego').append( '<a href="#" id="BotJuegoReno" style="position:relative;float:left;">Reno</a>');
	$( "#BotJuegoCerr" ).bind( "vclick", function() {
			iJuego=0;
			acabaJuego();
			
	});
	$( "#BotJuegoReno" ).bind( "vclick", function() {
			acabaJuego();
			disparaJuego();
	});
	$('#BotJuegoCerr').buttonMarkup({ icon: "delete", iconpos:"notext", theme: "a" });
	$('#BotJuegoReno').buttonMarkup({ icon: "refresh", iconpos:"notext", theme: "a" });
	iNombres=2; 
	iMascara=1;
	DimensionPosicionFotos ();
	iNivel=1;
	//vtimejuego=30;
	
	borrapantalla3();
	borrapantallat();
	
	pantalla3=function(){
	ctx3.textAlign="center";
	ctx3.fillStyle = "rgba(0, 0, 0, 0.75)";
	ctx3.fillRect(-ctx3.canvas.width/2, -ctx3.canvas.height/2, ctx3.canvas.width, ctx3.canvas.height); 
	ctx3.fillStyle = "white";
	if ($(window).innerWidth()<=400){
		ctx3.font = "bold 1em Arial";
	   }else{
	    ctx3.font = "bold 2em Arial";
	   };
	ctx3.textAlign="red";
	ctx3.fillText('Para seleccionar constelaciones', 0, -ctx3.canvas.height*2/6);
	ctx3.fill();
	
	if ($(window).innerWidth()<=400){
		ctx3.font = "bold 2em Arial";
	   }else{
	    ctx3.font = "bold 4em Arial";
	   };
	ctx3.fillStyle = "RED";
	ctx3.fillText('DOUBLE CLICK', 0, -ctx3.canvas.height/6);
	ctx3.fillText('OR', 0, 0);
	ctx3.fillText('DOUBLE TAP', 0, ctx3.canvas.height/6);
	ctx3.fill();
	}
	pantalla3();
	
	clearTimeout(juegoEspera);
	JuegoEspera=setTimeout(function(){
			borrapantalla3();
			pantalla3=function(){};
			pantallat=function(){};
			presentaNivel();
		}, 2500)
	
	
	
	
};

function acabaJuego(){
	//sjugando=false;
	//iJuego=0;
	pantalla3=function(){};
	pantallat=function(){};
	clearTimeout(juegoEspera);
	clearTimeout(txtBorraEspera);
	clearInterval(juegoLoop);
	$( "#BotJuegoCerr" ).remove();
	$( "#BotJuegoReno" ).remove();
	$('#c3').off('vclick');
	//$( "#c3" ).remove();
	borrapantalla3();
	borrapantallat();
	
};
function gameOver(){

		clearTimeout(juegoEspera);
		clearTimeout(txtBorraEspera);
		clearInterval(juegoLoop);
		$('#c3').off('vclick');
		borrapantalla3();
		borrapantallat();
		pantallat=function(){};
		pantalla3=function(){};
		pantalla3=function(){
		ctx3.fillStyle = "rgba(0, 0, 0, 0.75)";
		ctx3.fillRect(-ctx3.canvas.width/2, -ctx3.canvas.height/2, ctx3.canvas.width, ctx3.canvas.height); 
		ctx.fill();
		ctx3.fillStyle = "white";
		strokeStyle="blue";
		ctx3.font = "bold 8em Arial";
		ctx3.textAlign="center";
		ctx3.fillText('GAME', 0, 0);
		ctx3.fillText('OVER', 0, ctx3.canvas.height/4);
		};
		pantalla3();
		//$("#popSignRanking").popup( "close" );
		if ((iNivel-1)>MatRanking[4][1] && iJuego==1){
				faltagrabar=0;
				SignRanking();	
		};
		
		 
};
function conseguido(){
		//clearTimeout(juegoEspera);
		$('#c3').off('vclick');
		clearTimeout(txtBorraEspera);
		clearInterval(juegoLoop);
		borrapantalla3();
		borrapantallat();
		pantallat=function(){};
		ctx3.fillStyle = "rgba(0, 0, 0, 0.75)";
		ctx3.fillRect(-ctx3.canvas.width/2, -ctx3.canvas.height/2, ctx3.canvas.width, ctx3.canvas.height); 
		//ctx3.fillStyle = "black";
		ctx.fill();
		ctx3.fillStyle = "white";
		strokeStyle="blue";
		ctx3.font = "bold 8em Arial";
		ctx3.textAlign="center";
		ctx3.fillText('BIEN', 0, 0);
		ctx3.fillText('HECHO', 0, ctx3.canvas.height/4);
		clearTimeout(txtBorraEspera);
		txtBorraEspera=setTimeout(function(){
			borrapantalla3();
			iNivel +=1;
			presentaNivel();
		}, 2000);
		
};



function presentaNivel(){
	vdesafio=iNivel+2;
	vtimejuego=28 + 2*iNivel ;
	//vdesafio=3;
	//vtimejuego=10;
	
	
	pantallaNivel()
	//Rellena constelaciones a preguntar
	ConstJuego=secuenciaUnica(vdesafio,MatrizConstelaciones.length);
	
	//Primera vez que entra con click en patalla 3 
	iConstJuego=-1;
	$('#c3').off('vclick');
	$('#c3').on({ 'vclick' : function(e){ 
	//juegoEspera=setTimeout(function(){
	if (iConstJuego<0){
		pantalla3=function(){};
		pantallat=function(){};
		iConstJuego=0;
		ponenombreGrandePeque ();
		
		juegoLoop=setInterval(function(){
			if (vtimejuego==0){
				//clearInterval(juegoLoop);
				gameOver();
			}else{
				//borra crono
				borrapantallat();
				pantallat = function(){};
				pantallat = function(){
					ctxt.textAlign="left";
					ctxt.fillStyle = "white";
					ctxt.font = "bold 2em Arial";
					//pone crono
					ctxt.fillText(vtimejuego, -ctxt.canvas.width*(0.4), ctxt.canvas.height*(0.4));
				};
				pantallat();
				vtimejuego-=1;
			};	
		},1000);
	}else{
		//evalua dobleclik a 300ms
		vdate = new Date();
		vmsecondact =vdate.getTime();
		vmsecondinc=vmsecondact-vmsecondant;
		vmsecondant=vmsecondact;
		
		if (vmsecondinc>0 && vmsecondinc<300){
			e.preventDefault()
			mousex=e.pageX-c.offsetLeft-Scentrorot[0]+ $('#pantalla').scrollLeft();
			mousey=e.pageY-c.offsetTop-Scentrorot[1]+ $('#pantalla').scrollTop();
			//Se normaliza el radio respecto al radio del círculo de estrellas del planisferio 
			//                       para tamaño grande 800x800 el radio es 337.5px  multiplicado por el cambio de escala
			//                       para tamaño grande 400x400 el radio es 168.8px  multiplicado por el cambio de escala
			if(iTamaño==0){
				radioact=Math.sqrt(mousex*mousex + mousey*mousey)/(337.5*vscale2);
			}else{
				//iTamaño =1
				radioact=Math.sqrt(mousex*mousex + mousey*mousey)/(168.8*vscale2);
			}
			vtan=(mousey/mousex);
			anguloactJuego=Math.atan(vtan);
			
			//El sentido de giro se encuentra invertido ( porque el eje Y esta invertido)
			//atan() Solo devuelve ángulos entre pi/2 y -pi/2 (primer y cuarto cuadrante).
			//Paso el ángulo a valor positivo entre 0 y 2pi
			if(mousex<0){
				//Lo mando al segundo y tercer cuadrante
			     anguloactJuego+=Math.PI;
			 } else{
			    //Cuarto cuadrante en positivo
			     if(mousex>0 && mousey<0){
			         anguloactJuego+=2*Math.PI;
			     };
			 };
			 anguloactJuego=anguloactJuego-anguloplanis;
			 //Mantengo el ángulo entre cero y 2pi
			if (anguloactJuego>=2*Math.PI){
				anguloactJuego-=2*Math.PI;
			}else{
				if (anguloactJuego<0){
				anguloactJuego+=2*Math.PI;
				};
			};
								
			/* //pru
			ctx2.clearRect(-ctx2.canvas.width/2,  -ctx2.canvas.height/2, ctx2.canvas.width, ctx2.canvas.height);
			ctx2.fillStyle = "white";
			ctx2.font = "bold 2em Arial";
			ctx2.textAlign="center";
			ctx2.fillText(anguloactJuego+','+radioact, 0, -ctx2.canvas.height/4);
			ctx2.fillText(MatrizConstelaciones[iConstJuego][1]+','+MatrizConstelaciones[iConstJuego][2], 0, -ctx2.canvas.height/4+ 40);
			ctx2.fillText(MatrizConstelaciones[iConstJuego][3]+','+MatrizConstelaciones[iConstJuego][4], 0, -ctx2.canvas.height/4+ 80);
			ctx3.fill();
			*/
			i=ConstJuego[iConstJuego];
			if(MatrizConstelaciones[i][1]<=anguloactJuego && anguloactJuego<=MatrizConstelaciones[i][2] && MatrizConstelaciones[i][3]<=radioact && radioact<=MatrizConstelaciones[i][4]){
					iConstJuego+=1;
					if(ConstJuego.length > iConstJuego){
						ponenombreGrandePeque ();
					}else{
						conseguido();
					}
				}else{
					if (MatrizConstelaciones[i].length>5 && MatrizConstelaciones[i][5]<=anguloactJuego && anguloactJuego<=MatrizConstelaciones[i][6] && MatrizConstelaciones[i][7]<=radioact && radioact<=MatrizConstelaciones[i][8] ){
						iConstJuego+=1;
						if(ConstJuego.length > iConstJuego){
							ponenombreGrandePeque ();
						}else{
							conseguido();
						}
					}else{
						//pone nombre grande: cara triste
						ponenombrePequeño ();
						ctx3.save();
						ctx3.rotate(Math.PI/2);
						if ($(window).innerWidth()<=400){
							ctx3.font = "bold 4em Arial";
						   }else{
						    ctx3.font = "bold 8em Arial";
						 };
						ctx3.fillStyle = "red";
						ctx3.textBaseline = 'middle';
						ctx3.textAlign="center";
						ctx3.fillText(':-(', -ctx3.canvas.width*(0.2), 0);
						ctx3.restore();
						clearTimeout(txtBorraEspera);
						txtBorraEspera=setTimeout(function(){
							 ponenombrePequeño ();
						}, 1500);
					};
				};
			;}  
		}
	}});
};

function ponenombreGrandePeque (){
	borrapantalla3();
	pantalla3=function(){};
	pantalla3=function(){	
		//pone nombre grande
		ctx3.fillStyle = "yellow";
		if ($(window).innerWidth()<=400){
			ctx3.font = "bold 2em Arial";
	    }else{
	        ctx3.font = "bold 4em Arial";
	    };
		ctx3.textAlign="center";
		ctx3.fillText(MatrizConstelaciones[ConstJuego[iConstJuego]][0], 0, -ctx3.canvas.height*(0.1));
	};
	pantalla3();
	clearTimeout(txtBorraEspera);
	txtBorraEspera=setTimeout(function(){
		ponenombrePequeño ()
	}, 1500)	
};

function ponenombrePequeño (){
	//borrar todo
	borrapantalla3();
	pantalla3=function(){};
	pantalla3=function(){
		//pone nombre pequeño
		ctx3.textAlign="right";
		ctx3.fillStyle = "white";
		if ($(window).innerWidth()<=400){
			ctx3.font = "bold 1em Arial";
		}else{
		    ctx3.font = "bold 2em Arial";
		};
		ctx3.fillText(MatrizConstelaciones[ConstJuego[iConstJuego]][0], ctx2.canvas.width*(0.4), ctx2.canvas.height*(0.4));
	}
	pantalla3();
};

function borrapantalla3(){
	ctx3.canvas.width = ctx3.canvas.width;
	ctx3.canvas.height = ctx3.canvas.height;
	ctx3.translate(ctx3.canvas.width/2,ctx3.canvas.height/2)
	ctx3.clearRect(-ctx3.canvas.width/2,  -ctx3.canvas.height/2, ctx3.canvas.width, ctx3.canvas.height);
};

function borrapantallat(){
	ctxt.canvas.width = ctxt.canvas.width;
	ctxt.canvas.height = ctxt.canvas.height;
	ctxt.translate(ctxt.canvas.width/2,ctxt.canvas.height/2)
	ctxt.clearRect(-ctxt.canvas.width/2,  -ctxt.canvas.height/2, ctxt.canvas.width, ctxt.canvas.height);
};

function pantallaNivel(){
	borrapantalla3();
	pantalla3=function(){
		ctx3.fillStyle = "rgba(0, 0, 0, 0.75)";
		ctx3.fillRect(-ctx3.canvas.width/2, -ctx3.canvas.height/2, ctx3.canvas.width, ctx3.canvas.height); 
		
		ctx3.fillStyle = "yellow";
		if ($(window).innerWidth()<=400){
			ctx3.font = "bold 2em Arial";
		}else{
		    ctx3.font = "bold 4em Arial";
		};
		ctx3.textAlign="center";
		ctx3.fillText('NIVEL'+iNivel, 0, -ctx3.canvas.height*2/6);
		ctx3.fill();
		ctx3.fillStyle = "white";
		ctx3.fillText('LOCALIZA', 0, -ctx3.canvas.height/6);
		ctx3.fillText(vdesafio+' CONSTELACIONES', 0, 0);
		ctx3.fillText('EN '+vtimejuego+' SEGUNDOS', 0, ctx3.canvas.height/6);
		ctx3.fill();
		ctx3.beginPath();
	    ctx3.lineWidth = 5;
	    // line color
	    ctx3.strokeStyle = 'green';
	     ctx3.fillStyle="white";
		ctx3.arc(0, ctx3.canvas.height*2/6, 40, 0, Math.PI*2);
		 ctx3.fill();
		ctx3.stroke();
	    //ctx3.strokeStyle="yellow";
	    //ctx3.lineWidth=0;
	     ctx3.beginPath();
	     ctx3.fillStyle="green";
	    ctx3.moveTo(-25,ctx3.canvas.height*2/6-32);
	    ctx3.lineTo(40,ctx3.canvas.height*2/6);
	    ctx3.lineTo(-25,ctx3.canvas.height*2/6+32);
	    ctx3.lineTo(-25,ctx3.canvas.height*2/6-32);
	    ctx3.fill();
	    ctx3.fillStyle="black";
	    ctx3.beginPath();
	    ctx3.moveTo(-20,ctx3.canvas.height*2/6-25);
	    ctx3.lineTo(30,ctx3.canvas.height*2/6);
	    ctx3.lineTo(-20,ctx3.canvas.height*2/6+25);
	    ctx3.lineTo(-20,ctx3.canvas.height*2/6-25);
	    ctx3.fill();
	}
	pantalla3();
}

function SignRanking(){
	//$('#popSignRanking').dialog('open'); 
	 //$('#popSignRanking').dialog('close');
	 iPos=0;
	 for (iPos=0; (iNivel-1) <= MatRanking[iPos][1];iPos++){
	 };
	 
	 switch(iPos) {
				case 0:
				  textposicion='primera'; 
				  break;
				case 1:
				  textposicion='segunda'; 
				  break;
				case 2:
				  textposicion='tercera'; 
				  break;
				case 3:
				  textposicion='cuarta'; 
				  break;
				case 4:
				  textposicion='quinta'; 
				  break;
				//default:
				  //code to be executed if n is different from case 1 and 2
				}
	//$("#xSignRanking").click();
	$("#textSignRanking").html('<h3>Introduce tú nombre <br/> para aparecer en el Ranking <br/> en '+ textposicion +' posición</h3>');
	$("#BSignRanking").click(); 
	
	$("#popSignRanking").unbind( "popupafteropen" );
	$("#popSignRanking" ).bind({
        popupafteropen: function() { $("#nameSignRanking" ).focus(); 
                                    }
     });
	
     $('#botSignRanking').off('vclick');
     $( "#botSignRanking" ).on( "vclick", function( event ) {

        $('#botSignRanking').off('vclick');
        userplanis=$('#nameSignRanking').val();
        $("#xSignRanking").click(); 
        
        for (i=(MatRanking.length-1);i >iPos; i=i-1){
  
            MatRanking[i][0]=MatRanking[i-1][0];
			MatRanking[i][1]=MatRanking[i-1][1];
		 };
        MatRanking[iPos][0]=userplanis;
		MatRanking[iPos][1]=iNivel-1;
			
		if(localStorage){
            //alert('El navegador soporta Local Storage!');
			//Upload Local estorage
			localStorage.setItem("userplanis0", MatRanking[0][0]);
			localStorage.setItem("levelplanis0", MatRanking[0][1]);
			localStorage.setItem("userplanis1", MatRanking[1][0]);
			localStorage.setItem("levelplanis1", MatRanking[1][1]);
			localStorage.setItem("userplanis2", MatRanking[2][0]);
			localStorage.setItem("levelplanis2", MatRanking[2][1]);
			localStorage.setItem("userplanis3", MatRanking[3][0]);
			localStorage.setItem("levelplanis3", MatRanking[3][1]);
			localStorage.setItem("userplanis4", MatRanking[4][0]);
			localStorage.setItem("levelplanis4", MatRanking[4][1]);
		}else{
             alert('El navegador NO soporta Local Storage!');
		};
	
		//localStorage.clear();
		//localStorage.removeItem('favoriteflavor');
		/*
		alert(MatRanking[0][0]+MatRanking[0][1]+MatRanking[1][0]+MatRanking[1][1]+MatRanking[2][0]+MatRanking[2][1]+MatRanking[3][0]+MatRanking[3][1]+MatRanking[4][0]+MatRanking[4][1])		
		*/
		});
};

function secuenciaUnica(n,nummax){
	var Vect=new Array(n);
	var l,fl,m=0;
	while (m<n){
		l=Math.random()*nummax;
		fl=Math.floor(l);
		if (FvalueIn(fl,Vect)==true){
			Vect[m]=fl;
			m+=1;
		};
	};
	/* //pru
	for (m = 0; m < n; ++m){	
			Vect[m]=3;
		};
	*/
	return Vect;
};

FvalueIn=function(fl,Vect){
		var k =0;
		for (k = 0; k < Vect.length; ++k){	
			if (fl==Vect[k]){
				return false;
				//break;
			};
		};
		return true;
};	