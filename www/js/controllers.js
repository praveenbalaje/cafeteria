angular.module('starter.controllers', [])

.controller('categoryCtrl', function($scope, $stateParams) {

}) 

.controller('HomeCtrl', function($scope, $stateParams,$state,$http) {
    
  var myVar = setInterval(myTimer ,100);

        function myTimer() {
          if($state.current.name=="home"){
  document.getElementById('user').value=window.localStorage['username'];
 
    $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata6?username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
    .success(function(data) {

    document.getElementById('available').value=data.status;
    if(data.status!=window.localStorage['available'])
    { 
      
      if(parseInt(data.status)>parseInt(window.localStorage['balance'])){
        var bal=parseInt(data.status)-parseInt(window.localStorage['available'])
         localStorage.setItem('balance',parseInt(window.localStorage['balance'])+bal);
         localStorage.setItem('available',data.status);
    }
    else   if(parseInt(data.status)<parseInt(window.localStorage['balance'])){
      var bal=parseInt(window.localStorage['available'])-parseInt(data.status)
       localStorage.setItem('balance',parseInt(window.localStorage['balance'])-bal);
       localStorage.setItem('available',data.status);
       if(window.localStorage['balance']<0)
       {
          alert("order cost exceeds remaining balance");
       }
  }
    }
    })
    document.getElementById('balance').value= window.localStorage['balance'];
        }
      }

        $scope.signout=function(){
          $state.go('login');
          localStorage.clear();
          localStorage.setItem('item',"0");
          localStorage.setItem('cost',"0");
          localStorage.setItem('item2',"0");
          localStorage.setItem('cost2',"0");
          localStorage.setItem('item3',"0");
          localStorage.setItem('cost3',"0");
      
          localStorage.setItem('item4',"0");
          localStorage.setItem('cost4',"0");
      
          localStorage.setItem('puffs',"0");
          localStorage.setItem('vegroll',"0");
          localStorage.setItem('pongal',"0");
          localStorage.setItem('idly',"0");
   
          localStorage.setItem('available',"0");
          localStorage.setItem('balance',"0");
          localStorage.setItem('date',"0");
          localStorage.setItem('time',"0");
          localStorage.setItem('id',"0");
        
          localStorage.setItem('saved',"");
          localStorage.setItem('username',"0");
          localStorage.setItem('mobile',"0");



        }
        $scope.search=function()
        {
          
          var search=document.getElementById('search').value;
          search=search.toLowerCase().replace(" ","")
          alert(search)
          var o=search.match("s.[a-z]*.s|p.f|v.[a-z]*.l");
          var t=search.match("t.[a-z]*.n|i..y|p.[a-z]*.l");
          if(t!=null)
          {
            $state.go('tiffin');
          }
          else if(o!=null)
          {
            $state.go('snacks');
          }
        }
        $scope.record = function() {
          var recognition = new SpeechRecognition();
          recognition.onresult = function(event) {
              if (event.results.length > 0) {
                  $scope.recognizedText = event.results[0][0].transcript;
                  alert( $scope.recognizedText);
                  if($scope.recognizedText=="tiffin"||$scope.recognizedText=="tiffin"||$scope.recognizedText=="pongal"||$scope.recognizedText=="idly")
                  {
                    $state.go('tiffin');
                  }
                  else if($scope.recognizedText=="snack"||$scope.recognizedText=="snacks"||$scope.recognizedText=="puffs"||$scope.recognizedText=="vegroll")
                  {
                    $state.go('snacks');
                  }
                
                  $scope.$apply()
              }
          };
          recognition.start();
        };

})



.controller('orderCtrl', function($scope, $stateParams,$state,$ionicPopup,$http) {

  
 
    $scope.orders = [
        { title: 'order list', id: 1 },
       
      ];

      $scope.onItemDelete = function(order) {
        $scope.orders.splice($scope.orders.indexOf(order), 1);
        

        localStorage.setItem('saved', JSON.stringify($scope.orders));
        
          $scope.saved = window.localStorage['saved'];
      }

      
      // $scope.refresh=function(){
        // var myVar = setInterval(myTimer ,100);
        // function myTimer() {
          $scope.$on("$ionicView.enter", function(){
          if($state.current.name=="order"){
        $scope.cost = window.localStorage['cost'];
        $scope.cost2 = window.localStorage['cost2'];
        $scope.cost3=window.localStorage['cost3'];
        $scope.cost4=window.localStorage['cost4'];
        

        var cost=parseInt($scope.cost);
        var cost2=parseInt($scope.cost2);
        var cost3=parseInt($scope.cost3);
        var cost4=parseInt($scope.cost4);
      var grandtotal=document.getElementById('grandtotal').value=cost+cost2+cost3+cost4;
      localStorage.setItem('grandtotal',grandtotal);
                
     $scope.orders={};
        
            $scope.orders = [
                { title: 'order list'},
               
              ];

              $scope.item= window.localStorage['item'];
              $scope.item2 = window.localStorage['item2'];

            
              $scope.cost1=window.localStorage['cost1'];
              $scope.cost2=window.localStorage['cost2'];

      


              $scope.item3=window.localStorage['item3'];
              $scope.cost3=window.localStorage['cost3'];

              $scope.item4=window.localStorage['item4'];
              $scope.cost4=window.localStorage['cost4'];

      
              $scope.address = window.localStorage['address'];
      
     if($scope.item!='' && $scope.item!=0 && $scope.item!=null){
      
       $scope.orders.push(
         {title :$scope.item + "* idly"+ " cost" + $scope.cost}
       )
     }

     if($scope.item2!='' && $scope.item2!=0 && $scope.item2!=null){
      
       $scope.orders.push(
         {title :$scope.item2 + "* pongal" +""+ " cost" + $scope.cost2}
       )
     }


    if($scope.item3!='' && $scope.item3!=0 && $scope.item3!=null){
      $scope.orders.push(
       
       {title: $scope.item3+ " * puffs"+ " cost" + $scope.cost3}
     )}

     if($scope.item4!='' && $scope.item4!=0 && $scope.item4!=null){
      $scope.orders.push(
       
       {title: $scope.item4+ " * vegRoll"+ " cost" + $scope.cost4}
     )}

           } 
     localStorage.setItem('saved', JSON.stringify($scope.orders));
     
       $scope.saved = window.localStorage['saved'];

      })
    
  
    localStorage.setItem('saved', JSON.stringify($scope.orders));
    
      $scope.saved = window.localStorage['saved'];
  
    $scope.sendorder=function() {



      $scope.saved = window.localStorage['saved'];
      $scope.save = window.localStorage['save'];
      $scope.save=  $scope.saved.replace(/title|[{}]|"|:|list,id1|cost[0-9]{0,6}|/gi,"");
      localStorage.setItem('save',$scope.save)
      $scope.save2=  $scope.save.replace(/,/gi,"\n\n");
      $scope.save2=  $scope.save2.replace(/[[]|[ ]]/gi,"");
    
      
      $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata6?username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
      .success(function(data) {

        localStorage.setItem('available',data.status)
      })
      $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=puffs", { params: { "key1": "value1"} })
      .success(function(data) {
          localStorage.setItem('puffs',data.status);
            
      })
      $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=vegroll", { params: { "key1": "value1"} })
      .success(function(data) {
          localStorage.setItem('vegroll',data.status);
            
      })
      $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=idly", { params: { "key1": "value1"} })
      .success(function(data) {
          localStorage.setItem('idly',data.status);
            
      })
      $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=pongal", { params: { "key1": "value1"} })
      .success(function(data) {
          localStorage.setItem('pongal',data.status);
            
      })
      setTimeout(myFunction, 1000);
      function myFunction() {

      if(parseInt(window.localStorage['available'])>=parseInt(window.localStorage['grandtotal']))
      {
        if (parseInt(window.localStorage['puffs'])>=parseInt(window.localStorage['item3']) && parseInt(window.localStorage['vegroll'])>=parseInt(window.localStorage['item4'])&&
        parseInt(window.localStorage['idly'])>=parseInt(window.localStorage['item'])&&parseInt(window.localStorage['pongal'])>=parseInt(window.localStorage['item2']))
        {
       var confirmPopup = $ionicPopup.confirm({
          title: 'Order List',
          template: 'Are you sure you want to place this order?',
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You are sure');
            var puffs=window.localStorage['puffs']-window.localStorage['item3'];
            var vegroll=window.localStorage['vegroll']-window.localStorage['item4'];
            var idly=window.localStorage['idly']-window.localStorage['item'];
            var pongal=window.localStorage['pongal']-window.localStorage['item2'];
            var balance=window.localStorage['available']-window.localStorage['grandtotal'];
  
            var link = 'http://192.168.43.69/cafe/cc/inventory.php';
            $http.post(link, {puffs : puffs,vegroll : vegroll}).then(function (res){
            $scope.response = res.data;})
            var link = 'http://192.168.43.69/cafe/cc/inventory1.php';
            $http.post(link, {idly : idly,pongal : pongal}).then(function (res){
            $scope.response = res.data;})
            var link = 'http://192.168.43.69/cafe/cc/account.php';
            $http.post(link, {balance : balance,username : window.localStorage['username']}).then(function (res){
            $scope.response = res.data;})
            var link = 'http://192.168.43.69/cafe/cc/api.php';
            $http.post(link, {username : window.localStorage['username'],mobile: window.localStorage['mobile'],orderlist: $scope.save2
          }
          
          
        ).then(function (res){
                $scope.response = res.data;
              arr = res.data.split(' ');             // ["72", "tocirah", "sneab"]
              date = arr[0];                    // "72"
              time = arr[1] + ' ' + arr[2];
              localStorage.setItem('date',date);
              localStorage.setItem('time',time);
          })
          var link = 'http://192.168.43.69/cafe/cc/history.php';
          $http.post(link, {username : window.localStorage['username'],orders: $scope.save2
        })
        $state.go('qr');
          } else {
            console.log('You are not sure');
          }
        });

          }
          else if(parseInt(window.localStorage['puffs'])<parseInt(window.localStorage['item3']))
          {
            alert("puff stock not available");
            $state.go('snacks');
          }
          else if(parseInt(window.localStorage['vegroll'])<parseInt(window.localStorage['item4']))
          {
            alert("Vegroll stock not available");
            $state.go('snacks');
          }
          else if(parseInt(window.localStorage['idly'])<parseInt(window.localStorage['item']))
        {
          alert("Idly stock not available");
          $state.go('tiffin');
        }
        else if(parseInt(window.localStorage['pongal'])<parseInt(window.localStorage['item2']))
        {
          alert("pongal stock not available" );
          $state.go('tiffin');
        }
      }
      else
      {
        alert("Insufficient Balance");
        $state.go('home');
      }
    }

  }


  
    
  
})


.controller('snacksCtrl', function($scope, $stateParams,$state,$http) {

  $scope.item3=window.localStorage['item3'];
  $scope.cost3=window.localStorage['cost3'];
  var item3=document.getElementById('item3').value=$scope.item3;
  var cost3=document.getElementById('cost3').value=$scope.cost3;
  $scope.item4=window.localStorage['item4'];
  $scope.cost4=window.localStorage['cost4'];
  var item4=document.getElementById('item4').value=$scope.item4;
  var cost4=document.getElementById('cost4').value=$scope.cost4;

                   ///////////////////////////////////////TRY With AJAX////////////////////////////////
//   var fruits=["","banana","apple"];
//   var j=1;
  
//    var myVar = setInterval(myTimer ,1000);
//   function myTimer() {
    
  
//   for(j=1;j<fruits.length;j++)
//   {   
//  // alert(fruits[j])
//   $http.get("http://192.168.43.69/store/inventory/rest/searchdata?item="+fruits[j]+"", { params: { "key1": "value1"} })
//   .success(function(data) {
//   //alert(j);
  

  
//       document.getElementById(fruits[j-fruits.length+1]).value=data.status;
//       localStorage.setItem(fruits[j-fruits.length+1],data.status);
//       //data.status=0;
//      // alert(fruits[j-fruits.length+1]);
//       //alert(data.status)
      
    
//     j++;
//   })
  
// }
//   }
                   ///////////////////////////////////////TRY With AJAX////////////////////////////////

    var myVar = setInterval(myTimer ,1000);
  function myTimer() {
    if($state.current.name=="snacks"){
      $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=puffs", { params: { "key1": "value1"} })
  .success(function(data) {
  
      document.getElementById('puffs').value=data.status;
      localStorage.setItem('puffs',data.status);
        
  })

  $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=vegroll", { params: { "key1": "value1"} })
  .success(function(data) {
  
      document.getElementById('vegroll').value=data.status;
      localStorage.setItem('vegroll',data.status);

  })
  document.getElementById('balance2').value= window.localStorage['balance'];
  document.getElementById('item3').value=window.localStorage['item3'];
  document.getElementById('cost3').value=window.localStorage['cost3'];
  document.getElementById('item4').value=window.localStorage['item4'];
  document.getElementById('cost4').value=window.localStorage['cost4'];
}
  }
  //localStorage.setItem('item3',"0");

   balance=parseInt(window.localStorage['balance']);
  
  $scope.sub1 = function() {
  
    var item3=document.getElementById('item3').value;
    var cost3=document.getElementById('cost3').value;
    window.localStorage['item3']=item3;

    
    
    $scope.item3 = window.localStorage['item3'];
    i=$scope.item3;
    localStorage.setItem('item3',i);
    while(i>0){
      i--;
    localStorage.setItem('item3',i);
    var item3 = document.getElementById('item3').value=i;
    var cost3 = document.getElementById('cost3').value=i*15;  
    window.localStorage['cost3']=cost3;
    window.localStorage['balance']=parseInt(window.localStorage['balance'])+15;
    document.getElementById('balance2').value= window.localStorage['balance'];
    break;
    }

  }
  
  $scope.add1 = function() {

    var item3=document.getElementById('item3').value;
    var cost3=document.getElementById('cost3').value;
    window.localStorage['item3']=item3;

  
    
    $scope.item3 = window.localStorage['item3'];
 
     i=$scope.item3;
     localStorage.setItem('item3',i);
     puffs=parseInt(window.localStorage['puffs']);
     cost3=parseInt(window.localStorage['cost3'])+15;
     balance=parseInt(window.localStorage['balance']);
    // alert(i + " " + apple);
    if(i<puffs && balance>=15){
    i++;  
    localStorage.setItem('item3',i);
    var item3 = document.getElementById('item3').value=i;
    var cost3 = document.getElementById('cost3').value=i*15;

    window.localStorage['cost3']=cost3;
    window.localStorage['balance']=parseInt(window.localStorage['balance'])-15; 
    document.getElementById('balance2').value= window.localStorage['balance'];
    }
     else if(balance<15)
     {
       alert("Not sufficient balance")
     }
    else{
      alert("Out of Stock");
    }
   
  }

  $scope.sub2 = function() {
    
      var item4=document.getElementById('item4').value;
      var cost4=document.getElementById('cost4').value;
      window.localStorage['item4']=item4;
  
   
      
      $scope.item4 = window.localStorage['item4'];
      i=$scope.item4;
      localStorage.setItem('item4',i);
      while(i>0){
        i--;
      localStorage.setItem('item4',i);
      var item4 = document.getElementById('item4').value=i;
      var cost4 = document.getElementById('cost4').value=i*20;
  
  
      
      window.localStorage['cost4']=cost4;
      window.localStorage['balance']=parseInt(window.localStorage['balance'])+20;
      document.getElementById('balance2').value= window.localStorage['balance'];
      break;
      }
  
    }
    
    $scope.add2 = function() {
  
      var item4=document.getElementById('item4').value;
      var cost4=document.getElementById('cost4').value;
      window.localStorage['item4']=item4;
  

      $scope.item4 = window.localStorage['item4'];
       i=$scope.item4;
       localStorage.setItem('item4',i);
       vegroll=parseInt(window.localStorage['vegroll']);
       cost4=parseInt(window.localStorage['cost4'])+20;
       balance=parseInt(window.localStorage['balance']);
      if(i<vegroll && balance>=20){
      i++;
      localStorage.setItem('item4',i);
      var item4 = document.getElementById('item4').value=i;
      var cost4 = document.getElementById('cost4').value=i*20;
         
  
      window.localStorage['cost4']=cost4;
      window.localStorage['balance']=parseInt(window.localStorage['balance'])-20; 
      document.getElementById('balance2').value= window.localStorage['balance'];
      }
      else if(balance<20)
      {
        alert("Not sufficient balance")
      }
      else{
        alert("Out of Stock");
      }
      
    }
  $scope.order=function(){
    $state.go('order')
  }

}) 
.controller('tiffinCtrl', function($scope, $stateParams,$state,$http) {

    $scope.item=window.localStorage['item'];
    $scope.cost=window.localStorage['cost'];
    var item=document.getElementById('item').value=$scope.item;
    var cost=document.getElementById('cost').value=$scope.cost;
    $scope.item2=window.localStorage['item2'];
    $scope.cost2=window.localStorage['cost2'];
    var item2=document.getElementById('item2').value=$scope.item2;
    var cost2=document.getElementById('cost2').value=$scope.cost2;
  
    
      var myVar = setInterval(myTimer ,100);
    function myTimer() {
      if($state.current.name=="tiffin"){
        $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=idly", { params: { "key1": "value1"} })
    .success(function(data) {
    
        document.getElementById('idly').value=data.status;
        localStorage.setItem('idly',data.status);
          
    })
  
    $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=pongal", { params: { "key1": "value1"} })
    .success(function(data) {
    
        document.getElementById('pongal').value=data.status;
        localStorage.setItem('pongal',data.status);
  
    })
    document.getElementById('balance1').value= window.localStorage['balance'];
    document.getElementById('item').value=window.localStorage['item'];
    document.getElementById('cost').value=window.localStorage['cost'];
    document.getElementById('item2').value=window.localStorage['item2'];
    document.getElementById('cost2').value=window.localStorage['cost2'];
  }
    }
    //localStorage.setItem('item3',"0");
  
    balance=parseInt(window.localStorage['balance']);
    $scope.sub1 = function() {
    
      var item=document.getElementById('item').value;
      var cost=document.getElementById('cost').value;
      window.localStorage['item']=item;
  
      
      
      $scope.item = window.localStorage['item'];
      i=$scope.item;
      localStorage.setItem('item',i);
      while(i>0){
        i--;
      localStorage.setItem('item',i);
      var item = document.getElementById('item').value=i;
      var cost = document.getElementById('cost').value=i*20;  
      window.localStorage['cost']=cost;
      window.localStorage['balance']=parseInt(window.localStorage['balance'])+20; 
      document.getElementById('balance1').value= window.localStorage['balance'];
      break;
      }
  
    }
    
    $scope.add1 = function() {
  
      var item=document.getElementById('item').value;
      var cost=document.getElementById('cost').value;
      window.localStorage['item']=item;
  
    
      
      $scope.item = window.localStorage['item'];
   
       i=$scope.item;
       localStorage.setItem('item',i);
       idly=parseInt(window.localStorage['idly']);
       cost=parseInt(window.localStorage['cost'])+20;
       balance=parseInt(window.localStorage['balance']);
      // alert(i + " " + apple);
      if(i<idly && balance>=20){
      i++;  
      localStorage.setItem('item',i);
      var item = document.getElementById('item').value=i;
      var cost = document.getElementById('cost').value=i*20;
  
      window.localStorage['cost']=cost;
      window.localStorage['balance']=parseInt(window.localStorage['balance'])-20; 
      document.getElementById('balance1').value= window.localStorage['balance'];
   
      }
      else if(balance<20)
      {
        alert("Not sufficient balance")
      }
      else{
        alert("Out of Stock");
      }
     
    }
  
    $scope.sub2 = function() {
      
        var item2=document.getElementById('item2').value;
        var cost2=document.getElementById('cost2').value;
        window.localStorage['item2']=item2;
    
     
        
        $scope.item2 = window.localStorage['item2'];
        i=$scope.item2;
        localStorage.setItem('item2',i);
        while(i>0){
          i--;
        localStorage.setItem('item2',i);
        var item2 = document.getElementById('item2').value=i;
        var cost2 = document.getElementById('cost2').value=i*25;
    
    
        
        window.localStorage['cost2']=cost2;
        window.localStorage['balance']=parseInt(window.localStorage['balance'])+25; 
        document.getElementById('balance1').value= window.localStorage['balance'];
        break;
        }
    
      }
      
      $scope.add2 = function() {
    
        var item2=document.getElementById('item2').value;
        var cost2=document.getElementById('cost2').value;
        window.localStorage['item2']=item2;
    
  
        $scope.item2 = window.localStorage['item2'];
         i=$scope.item2;
         localStorage.setItem('item2',i);
         pongal=parseInt(window.localStorage['pongal']);
         cost2=parseInt(window.localStorage['cost2'])+25;
         balance=parseInt(window.localStorage['balance']);
        if(i<pongal && balance>=25){
        i++;
        localStorage.setItem('item2',i);
        var item2 = document.getElementById('item2').value=i;
        var cost2 = document.getElementById('cost2').value=i*25;
           
    
        window.localStorage['cost2']=cost2;
        window.localStorage['balance']=parseInt(window.localStorage['balance'])-25; 
        document.getElementById('balance1').value= window.localStorage['balance'];
        }
        else if(balance<25)
        {
          alert("Not sufficient balance")
        }
        else{
          alert("Out of Stock");
        }
        
      }
    $scope.order=function(){
      $state.go('order')
    }
  
  }) 
.controller('signupCtrl', function($scope, $stateParams,$state,$http) {

  localStorage.setItem('username',"0");
  localStorage.setItem('mobile',"0");
  localStorage.setItem('password',"0");
  $scope.submit=function(){
    var username=document.getElementById('username').value;
    var mobile=document.getElementById('mobile').value;
    var password=document.getElementById('password').value;
    if(password.length>=8 && mobile.length==10)
    {
    var password1=document.getElementById('password1').value.match(password);
    if(mobile!=null && password1!=null ){


      $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata?username="+username+"", { params: { "key1": "value1"} })
      .success(function(data) {
          localStorage.setItem('l1',data.status);
      })
      .error(function(data) {
          alert("ERROR");
         } )  
         $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata1?mobile="+mobile+"", { params: { "key1": "value1"} })
         .success(function(data) {
             $scope.status= data.status;
             localStorage.setItem('l2',data.status);
         })
         .error(function(data) {
             alert("ERROR");
            } )  
            setTimeout(myFunction, 2000);
            function myFunction() {
      $scope.l1=window.localStorage['l1'];
      $scope.l2=window.localStorage['l2'];
      if($scope.l1=="new" && $scope.l2=="new")
      {
      
      var link = 'http://192.168.43.69/cafe/cc/login.php';
      $http.post(link, {username : username,mobile:mobile,password: password}).then(function (res){
      $scope.response = res.data;})

      alert("successfully registered");
      $state.go('login');
      }
      else if($scope.l1!="new")
      {
          alert($scope.l1);
      }
      else if($scope.l2!="new")
      {
        alert($scope.l2);
      }
    }
    }
      else if(username=="" || password=="")
      {
        alert("Dont leave any fields empty");
      }
      else if(password1==null)
      {
        alert("Password Mismatch");
      }

    }
    else if(mobile.length!=10)
    {
      alert("invalid mobile number");
    }
    else
    {
      alert("Password minimum length 8 characters");
    }

  }
})
.controller('loginCtrl', function($scope, $stateParams,$state,$http) {

if(window.localStorage['username']!='0')
{
  $state.go('home');
  localStorage.setItem('item',"0");
  localStorage.setItem('cost',"0");
  localStorage.setItem('item2',"0");
  localStorage.setItem('cost2',"0");
  localStorage.setItem('item3',"0");
  localStorage.setItem('cost3',"0");

  localStorage.setItem('item4',"0");
  localStorage.setItem('cost4',"0");

  localStorage.setItem('puffs',"0");
  localStorage.setItem('vegroll',"0");
  localStorage.setItem('pongal',"0");
  localStorage.setItem('idly',"0");

  localStorage.setItem('available',"0");
  localStorage.setItem('balance',"0");
  localStorage.setItem('date',"0");
  localStorage.setItem('time',"0");
  localStorage.setItem('id',"0");
}
// $scope.backup=function(){
//   var backup= document.getElementById('backup').value;
//   localStorage.setItem('backup',backup);
// }
  $scope.login=function(){
  var uname=document.getElementById('uname').value;
  var pass=document.getElementById('pass').value;
  $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata2?username="+uname+"&&password="+pass+"", { params: { "key1": "value1"} })
  .success(function(data) {
      localStorage.setItem('entry',data.status);
  })

  $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata3?mobile="+uname+"&&password="+pass+"", { params: { "key1": "value1"} })
  .success(function(data) {
      localStorage.setItem('entry1',data.status);
  })
  setTimeout(myFunction, 3000);
  function myFunction() {
    $scope.entry=window.localStorage['entry'];
    $scope.entry1=window.localStorage['entry1'];
     if(($scope.entry=="Authorished") ||($scope.entry1=="Authorished") )
     {
       if($scope.entry=="Authorished")
       {
        $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata4?username="+uname+"", { params: { "key1": "value1"} })
        .success(function(data) {
            localStorage.setItem('mobile',data.status);
        })
        localStorage.setItem('username',uname);
        localStorage.setItem('password',pass);
       }
       else if($scope.entry1=="Authorished")
       {
        $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata5?mobile="+uname+"", { params: { "key1": "value1"} })
        .success(function(data) {
            localStorage.setItem('username',data.status);
        })
        localStorage.setItem('mobile',uname);
        localStorage.setItem('password',pass);
       }
       localStorage.setItem('item',"0");
       localStorage.setItem('cost',"0");
       localStorage.setItem('item2',"0");
       localStorage.setItem('cost2',"0");
       localStorage.setItem('item3',"0");
       localStorage.setItem('cost3',"0");
   
       localStorage.setItem('item4',"0");
       localStorage.setItem('cost4',"0");
   
       localStorage.setItem('puffs',"0");
       localStorage.setItem('vegroll',"0");
       localStorage.setItem('pongal',"0");
       localStorage.setItem('idly',"0");

       localStorage.setItem('available',"0");
       localStorage.setItem('balance',"0");
       localStorage.setItem('date',"0");
       localStorage.setItem('time',"0");
       localStorage.setItem('id',"0");
     
       localStorage.setItem('saved',"");
       $state.go('home');
     }
     else if(uname=="admin" && pass=="adminadmin")
     {
      $state.go('home');
      localStorage.setItem('item',"0");
      localStorage.setItem('cost',"0");
      localStorage.setItem('item2',"0");
      localStorage.setItem('cost2',"0");
      localStorage.setItem('item3',"0");
      localStorage.setItem('cost3',"0");
  
      localStorage.setItem('item4',"0");
      localStorage.setItem('cost4',"0");
  
      localStorage.setItem('puffs',"0");
      localStorage.setItem('vegroll',"0");
      localStorage.setItem('pongal',"0");
      localStorage.setItem('idly',"0");

      localStorage.setItem('available',"0");
      localStorage.setItem('balance',"0");
      localStorage.setItem('date',"0");
      localStorage.setItem('time',"0");
      localStorage.setItem('id',"0");
    
      localStorage.setItem('saved',"");
     }
     else
     {
       alert("Invalid username or password");
     }
  }
  }
})
.controller('qrCtrl', function($scope, $stateParams,$state,$http) {
  var qrcode;
  qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 250,
    height : 250
  });
  $scope.cancel=function(){

  
    $http.get("http://192.168.43.69/cafe/cafe/login/rest/searchdata6?username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
    .success(function(data) {

      localStorage.setItem('available',data.status)
    })
    $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=puffs", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('puffs',data.status);
          
    })
    $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata?item=vegroll", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('vegroll',data.status);
          
    })
    $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=idly", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('idly',data.status);
          
    })
    $http.get("http://192.168.43.69/cafe/cafe/inventory/rest/searchdata1?item=pongal", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('pongal',data.status);
    
    })
    setTimeout(myFunction, 1000);
    function myFunction(){
    var puffs=parseInt(window.localStorage['puffs'])+parseInt(window.localStorage['item3']);
    var vegroll=parseInt(window.localStorage['vegroll'])+parseInt(window.localStorage['item4']);
    var idly=parseInt(window.localStorage['idly'])+parseInt(window.localStorage['item']);
    var pongal=parseInt(window.localStorage['pongal'])+parseInt(window.localStorage['item2']);
    var balance=parseInt(window.localStorage['available'])+parseInt(window.localStorage['grandtotal']);

    var link = 'http://192.168.43.69/cafe/cc/inventory.php';
    $http.post(link, {puffs : puffs,vegroll : vegroll}).then(function (res){
    $scope.response = res.data;})
    var link = 'http://192.168.43.69/cafe/cc/inventory1.php';
    $http.post(link, {idly : idly,pongal : pongal}).then(function (res){
    $scope.response = res.data;})
    var link = 'http://192.168.43.69/cafe/cc/account.php';
    $http.post(link, {balance : balance,username : window.localStorage['username']}).then(function (res){
    $scope.response = res.data;})

    $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata?date="+window.localStorage['date']+"&&time="+window.localStorage['time']+
    "&&username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('id',data.status)

    })
    $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata3?date="+window.localStorage['date']+"&&time="+window.localStorage['time']+
    "&&username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
    .success(function(data) {
        localStorage.setItem('hid',data.status)

    })
    setTimeout(myFunction, 1000);
    function myFunction(){
    $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata2?data_date="+window.localStorage['date']+"&&ID="+window.localStorage['id']+"", { params: { "key1": "value1"} })
    .success(function(data) {
    }) 
    $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata4?data_date="+window.localStorage['date']+"&&id="+window.localStorage['hid']+"", { params: { "key1": "value1"} })
    .success(function(data) {
    })
    $state.go('home');
    localStorage.setItem('item',"0");
    localStorage.setItem('cost',"0");
    localStorage.setItem('item2',"0");
   
    localStorage.setItem('cost2',"0");
    localStorage.setItem('item3',"0");
    localStorage.setItem('cost3',"0");

    localStorage.setItem('item4',"0");
    localStorage.setItem('cost4',"0");

    localStorage.setItem('puffs',"0");
    localStorage.setItem('vegroll',"0");
    localStorage.setItem('pongal',"0");
    localStorage.setItem('idly',"0");

    localStorage.setItem('available',"0");
    localStorage.setItem('balance',"0");
    localStorage.setItem('date',"0");
    localStorage.setItem('time',"0");
    localStorage.setItem('id',"0");
  
    localStorage.setItem('saved',"");
   
  }
  }
}
  setInterval(myFunction, 1000);
  function myFunction() {
  if ($state.current.name == "qr")
{          
  $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata?date="+window.localStorage['date']+"&&time="+window.localStorage['time']+
          "&&username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
          .success(function(data) {
              localStorage.setItem('id',data.status)
function makeCode () {		
  var pot = window.localStorage['date']+" "+window.localStorage['id'];
  var elText =pot;

  if (!elText) {
    alert("Input a text");
    elText.focus();
    return;
  }
  

  qrcode.makeCode(elText);

  
}


makeCode();
setTimeout(myFunction, 3000);
function myFunction() {
                if(data.status==null)
                 {
            
                 
                  $state.go('home');
                  localStorage.setItem('item',"0");
                  localStorage.setItem('cost',"0");
                  localStorage.setItem('item2',"0");
                 
                  localStorage.setItem('cost2',"0");
                  localStorage.setItem('item3',"0");
                  localStorage.setItem('cost3',"0");
              
                  localStorage.setItem('item4',"0");
                  localStorage.setItem('cost4',"0");
              
                  localStorage.setItem('puffs',"0");
                  localStorage.setItem('vegroll',"0");
                  localStorage.setItem('pongal',"0");
                  localStorage.setItem('idly',"0");
           
                  localStorage.setItem('available',"0");
                  localStorage.setItem('balance',"0");
                  localStorage.setItem('date',"0");
                  localStorage.setItem('time',"0");
                  localStorage.setItem('id',"0");
                
                  localStorage.setItem('saved',"");
                 

                  }}
                
          })
        }
      }

  
})

.controller('historyCtrl', function($scope, $stateParams,$state,$ionicPopup,$http) {
  setInterval(myFunction, 100);
  function myFunction() {
  if ($state.current.name =="history")
  {
            $http.get("http://192.168.43.69/cafe/cafe/orders/rest/searchdata5?username="+window.localStorage['username']+"", { params: { "key1": "value1"} })
          .success(function(data) {
           localStorage.setItem('history',data);
          })
          setTimeout(myFunction, 500);
          function myFunction() {
           var d=  window.localStorage['history'].replace(/,/gi,"\n\n\n");
          document.getElementById('history').value=d
        }}
      }
})
;
