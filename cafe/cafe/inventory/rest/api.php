<?php

	 header("Access-Control-Allow-Origin: *");
	 require_once("Rest.inc.php");
	 

	 class API extends REST {
	
		public $data = "";
		
		 const DB_SERVER = "localhost";
		 const DB_USER = "root";
		 const DB_PASSWORD = "";
		 const DB = "cafeeria";

		 private $db = NULL;
		 private $mysqli = NULL;
		 public function __construct(){
			 parent::__construct();				// Init parent contructor
			 $this->dbConnect();					// Initiate Database connection
		 }
		
		 /*
		  *  Connect to Database
		 */
		 private function dbConnect(){
			 $this->mysqli = new mysqli(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);

		 }
		
		 /*
		  * Dynmically call the method based on the query string
		  */
		 public function processApi(){
			 $func = strtolower(trim(str_replace("/","",$_REQUEST['x'])));
			 if((int)method_exists($this,$func) > 0)
				 $this->$func();
			 else
				 $this->response('file not found',404); // If the method not exist with in this class "Page not found".
		 }
						   private function searchdata()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $item=$this->_request['item'];

							   $query="SELECT * FROM snacks where item ='$item'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["stock"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }	
						   private function searchdata1()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $item=$this->_request['item'];

							   $query="SELECT * FROM lunch where item ='$item'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["stock"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }	
			  private function json($data){
				if(is_array($data)){
				 return json_encode($data); 
			 }
		 }
		  
		 
	 }
	
	
	
	$api = new API;
	$api->processApi();
?>