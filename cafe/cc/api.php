<?php



$mysql_host = "localhost";
$mysql_database = "cafeeria";
$mysql_user = "root";
$mysql_password = "";
// Create connection
$conn = new mysqli($mysql_host, $mysql_user, $mysql_password,$mysql_database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


    //http://stackoverflow.com/questions/18382740/cors-not-working-php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }


    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata); 
        $orderlist = $request->orderlist;
        $username = $request->username;
        $mobile = $request->mobile;
      date_default_timezone_set("Asia/Kolkata");
      $curdate=date('Y-m-d');
       $curTime=date('H:i:s');
        $query="INSERT into orders(data_date,data_time,username,mobile,orderlist) VALUE ('$curdate','$curTime','$username','$mobile','$orderlist')";
        $r = $conn->query($query) or die($conn->error.__LINE__);
    
        if ($username != "") {
           // echo "" . $id;
            echo"".$curdate;
            echo"  ".$curTime;
        
        }
        else {
            echo "Empty username parameter!";
        }
    }
    else {
        echo "Not called properly with username parameter!";
    }

    // private function viewdata()
    // {
    //     if($this->get_request_method() != "GET")
    //     {
    //         $this->response('',406);
    //     }
        //$number=$this->_request['number'];
        //$mysql_tb = 'ultra';
        //$query="SELECT * FROM avengers where number='$number'";
        //$query="SELECT * FROM avengers";
    //     $getdata = file_get_contents("php://input");
    //     if (isset($getdata)) {
    //         $request = json_decode($getdata); 
    //     $query="SELECT * FROM tictac ORDER BY ID DESC LIMIT 1";
    //     $r = $conn->query($query) or die($conn->error.__LINE__);
    //     if($r->num_rows > 0){
    //         $result = array();
    //         while($row = $r->fetch_assoc()){
    //             $result[] = $row;
    //         }
    //         $conn->response($conn->json($result), 200); // send premises details
    //     }
    //     else{
    //         $result = array('status' => "failure", "msg" => "Error getting data.");
    //         $conn->response($conn->json($result),200);
    //     }
    // }
    
    // $sql = "SELECT * FROM tictac ORDER BY ID DESC LIMIT 1";
    // $result = $conn->query($sql);
    // $outp = "";
    // while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    //     if ($outp != "") {$outp .= ",";}
    //     $outp .= '{"username":"'  . $rs["username"] . '",';
    //     //$outp .= '"Password":"'   . $rs["Password"] . '"}'; 
           
    // }
    // $outp ='{ "records":[ '.$outp.' ]}';
    // $conn->close();
    // echo($outp);
    
?>