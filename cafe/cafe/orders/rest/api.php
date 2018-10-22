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
							  $date=$this->_request['date'];
							  $time=$this->_request['time'];
							  $username=$this->_request['username'];
							  

							   $query="SELECT * FROM orders where data_date='$date' && data_time='$time' && username='$username'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["ID"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }	
						   private function searchdata1()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $data_date=$this->_request['data_date'];
							  $ID=$this->_request['ID'];
							   $query="SELECT * FROM orders where data_date='$data_date'  && ID='$ID'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["orderlist"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata2()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $data_date=$this->_request['data_date'];
							  $ID=$this->_request['ID'];
							   $query="DELETE FROM orders
							   WHERE data_date='$data_date'  && ID='$ID'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["orderlist"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata3()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $date=$this->_request['date'];
							  $time=$this->_request['time'];
							  $username=$this->_request['username'];
							  

							   $query="SELECT * FROM history where data_date='$date' && data_time='$time' && username='$username'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["id"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata4()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $data_date=$this->_request['data_date'];
							  $id=$this->_request['id'];
							   $query="DELETE FROM history
							   WHERE data_date='$data_date'  && id='$id'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["orders"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata5()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $username=$this->_request['username'];
							   $query="SELECT * FROM history WHERE username='$username'";
	
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   //if($r->num_rows > 0){
								$result = array();
								while($row = $r->fetch_assoc()){
									$result[] = $row["orders"];
								}
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