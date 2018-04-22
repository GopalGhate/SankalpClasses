$(document).ready(function(){
	load_data();
	function load_data(element,state)
	{
		$("#registration").show();
		$("#examcreation").hide();
		$("#add_questions").hide();
		$("#fee_management").hide();
		$("#result").hide();
		$("#student_data").hide();
	}
	function toggle_forms(id)
	{
		var arr=["#registration","#examcreation","#student_data","#add_questions","#fee_management","#result"]
		for(var i=0; i<arr.length; i++)
		{
			if(id==arr[i])
			{
				$(id).show();
			}
			else
			{
				$(arr[i]).hide();
			}
		}
	}
	$("#data").click(function(){
		// alert();
		toggle_forms("#student_data");
	});
	$("#student_registration").click(function(){
		// alert($("#examcreation").class());
		toggle_forms("#registration");
	});
	$("#a_question").click(function(){
		// alert($("#examcreation").class());
		toggle_forms("#add_questions");
	});
	$("#result1").click(function(){
		// alert($("#examcreation").class());
		toggle_forms("#result");
	});
	$("#exam_creation").click(function(){
		// alert($("#examcreation").class());
		toggle_forms("#examcreation");
	});
	$("#fee").click(function(){
		// alert($("#examcreation").class());
		toggle_forms("#fee_management");
	});

});