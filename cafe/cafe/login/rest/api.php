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
				  $username=$this->_request['username'];
				   //$name=$this->_request['name'];
				   //$contact=$this->_request['contact'];
				   //$mail=$this->_request['mail'];
	   
	   
				   //$mysql_tb = 'ultra';
				   $query="SELECT * FROM signup where username ='$username'";
				   //$query="SELECT * FROM qr";
				   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				   $row = $r->fetch_assoc();
				   $hp=$row['username'];
 
				   if($username=$hp )
				   {
					 $result = array('status' =>"username already exist");
	   
				   }	
				   else{
					$result = array('status'=>"new");
				   }					   
					   
					  $this->response($this->json($result), 200); // send premises details
				   }
		   
				   private function searchdata1()
				   {
					   if($this->get_request_method() != "GET")
					   {
						   $this->response('',406);
					   }
					  $mobile=$this->_request['mobile'];
					   //$name=$this->_request['name'];
					   //$contact=$this->_request['contact'];
					   //$mail=$this->_request['mail'];
		   
		   
					   //$mysql_tb = 'ultra';
					   $query="SELECT * FROM signup where  mobile='$mobile'";
					   //$query="SELECT * FROM qr";
					   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
					   $row = $r->fetch_assoc();
					   $hp1=$row['mobile'];
					  
					   
					   if($mobile=$hp1)
					   {
						 $result = array('status' =>"mobile number already exist");
		   
					   }	
					   else{
						$result = array('status'=>"new");
					   }					   
						   
						  $this->response($this->json($result), 200); // send premises details
					   }
					   private function searchdata2()
					   {
						   if($this->get_request_method() != "GET")
						   {
							   $this->response('',406);
						   }
						  $username=$this->_request['username'];
						 $password=$this->_request['password'];
						   //$name=$this->_request['name'];
						   //$contact=$this->_request['contact'];
						   //$mail=$this->_request['mail'];
			   
			   
						   //$mysql_tb = 'ultra';
						   $query="SELECT * FROM signup where username ='$username' && password='$password'";
						   //$query="SELECT * FROM qr";
						   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
						   $row = $r->fetch_assoc();
						   $hp=$row['username'];
						   $hp1=$row['password'];
						  
						   
						   if($username=$hp && $password=$hp1)
						   {
							 $result = array('status' =>"Authorished");
			   
						   }	
						   else{
							$result = array('status'=>'unAuthorished');
						   }					   
							   
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata3()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $mobile=$this->_request['mobile'];
							 $password=$this->_request['password'];
							   //$name=$this->_request['name'];
							   //$contact=$this->_request['contact'];
							   //$mail=$this->_request['mail'];
				   
				   
							   //$mysql_tb = 'ultra';
							   $query="SELECT * FROM signup where mobile ='$mobile' && password='$password'";
							   //$query="SELECT * FROM qr";
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $hp=$row['mobile'];
							   $hp1=$row['password'];
							  
							   
							   if($mobile=$hp && $password=$hp1)
							   {
								 $result = array('status' =>"Authorished");
				   
							   }	
							   else{
								$result = array('status'=>'unAuthorished');
							   }					  			   
							  $this->response($this->json($result), 200); // send premises details
						   }
						   private function searchdata4()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $username=$this->_request['username'];
							   //$name=$this->_request['name'];
							   //$contact=$this->_request['contact'];
							   //$mail=$this->_request['mail'];
				   
				   
							   //$mysql_tb = 'ultra';
							   $query="SELECT * FROM signup where username ='$username'";
							   //$query="SELECT * FROM qr";
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["mobile"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }		
						   private function searchdata5()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $mobile=$this->_request['mobile'];
							   //$name=$this->_request['name'];
							   //$contact=$this->_request['contact'];
							   //$mail=$this->_request['mail'];
				   
				   
							   //$mysql_tb = 'ultra';
							   $query="SELECT * FROM signup where mobile ='$mobile'";
							   //$query="SELECT * FROM qr";
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["username"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }	
						   private function searchdata6()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $username=$this->_request['username'];
							   //$name=$this->_request['name'];
							   //$contact=$this->_request['contact'];
							   //$mail=$this->_request['mail'];
				   
				   
							   //$mysql_tb = 'ultra';
							   $query="SELECT * FROM signup where username ='$username'";
							   //$query="SELECT * FROM qr";
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["balance"]); 
							  $this->response($this->json($result), 200); // send premises details
						   }	
						   private function searchdata7()
						   {
							   if($this->get_request_method() != "GET")
							   {
								   $this->response('',406);
							   }
							  $username=$this->_request['username'];
							   //$name=$this->_request['name'];
							   //$contact=$this->_request['contact'];
							   //$mail=$this->_request['mail'];
				   
				   
							   //$mysql_tb = 'ultra';
							   $query="SELECT * FROM signup where mobile ='$username'";
							   //$query="SELECT * FROM qr";
							   $r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
							   $row = $r->fetch_assoc();
							   $result = array('status' => $row["balance"]); 
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