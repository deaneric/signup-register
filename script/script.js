$(document).ready(function(){
    
	$("#reg_name, #reg_email, #reg_pass, #con_reg_pass").keyup(function(){
		let name = $('#reg_name').val() || "";
		let email = $('#reg_email').val() || "";
		let pwd = $('#reg_pass').val() || "";
		let conPwd = $('#con_reg_pass').val() || "";
		let val = false;
	
		(pwd!="") ? checkPassword($("#reg_pass"),$("#view_password")) 
		: hideCheckPassword($("#reg_pass"),$("#view_password"));

        (conPwd!="") ? checkPassword($("#con_reg_pass"),$("#view_confirm_password")) 
		: hideCheckPassword($("#con_reg_pass"),$("#view_confirm_password"));
			
		(pwd != conPwd) ? (
		    $("#con_reg_pass").next().css({"color":"red"}),
			val = false,
			checkDisable(name,email,pwd,conPwd,val)
		):(
		    $("i.password-tick").css({"color":"green"}),
	        val = true,
		    checkDisable(name,email,pwd,conPwd,val)
		);
	});
	
	function checkPassword(passwd,viewPwd){
		passwd.next().css({"display":"inline-block","color":"green"});
		viewPwd.css({"display":"inline-block"});
	}
	
	function hideCheckPassword(passwd,viewPwd){
		passwd.next().css({"display":"none"});
        viewPwd.css({"display":"none"});
	}
	
	function checkDisable(name,email,pwd,conPwd,val){
		(name!="" && email!="" && pwd!="" && conPwd!="" && val!=false)?(
			$("#register_btn").removeAttr("disabled").css({"cursor":"pointer", "background-color":"#009600"}),
			$("#con_reg_pass").next("i.password-tick").css({"color":"green"})
		):		
			$("#register_btn").attr("disabled","disabled").css({"cursor":"no-drop", "background-color":"#00960075"});
	}
	
	$("#reg_form").submit(function(){
		let name = $('#reg_name').val() || "";
		let email = $('#reg_email').val() || "";
		let pwd = $('#reg_pass').val() || "";
		let conPwd = $('#con_reg_pass').val() || "";
		alert("Name:" + name + "\nEmail:" + email + "\nPassword:" + pwd);
	});
	
	$("#view_password").click(function(){
		viewPassword($("#reg_pass")[0],$("#view_password"));  			
	});
	
	$("#view_confirm_password").click(function(){
		viewPassword($("#con_reg_pass")[0],$("#view_confirm_password")); 			
	});
	
	function viewPassword(pswd,view){
		(pswd.type === "password")?( 
		    pswd.type = "text",
			view.css("color","black")
		):( 
		    pswd.type = "password",
			view.css("color","#808080")
	    );
	}
	
	$("#reg_pass").focus(function(){
		$("#view_password").css({"display":"inline-block"}); 
			
	});
	
	$("#con_reg_pass").focus(function(){
		$("#view_confirm_password").css({"display":"inline-block"});
	});
	
});