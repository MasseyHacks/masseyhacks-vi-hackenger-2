
$(function () {
	document.title = document.title + gQuestion;
	if(Cookies.get('attempted'+gQuestion) === undefined){
		$.post({
			url: apiBase + '/report',
			data: JSON.stringify({
				"info": {
					"namespace": "hackenger2",
					"question": gQuestion,
					"state": "loaded"
				}
			}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function(res){
				console.log("Session started");
				Cookies.set('attempted'+gQuestion, 'true', { expires: 7, path: '' });
			},
			error: function(err){
				Swal.fire({
					icon: "error",
					title: "Error!",
					text: "There was a problem contacting the control server."
				});
				//console.log("Error contacting control server");
			}
		})
	}	
	
	if(selectorEnabled){
		$(submitSelector).click(function(e) {
			e.preventDefault();
			let answer = $(inputSelector).val();
			
			
			if(valueOverride){
				answer = valueOverrideFunction();
			}
			$(inputSelector).val("");
			
			$.post({
				url: apiBase + '/submit',
				data: JSON.stringify({
					"namespace": "hackenger2",
					"question": gQuestion,
					"answer": answer
				}),
				dataType: "json",
				contentType: "application/json; charset=utf-8",
				success: function(res){
					console.log(res);
					if(!res.result.success){
						alert(res.result.message);
						Swal.fire({
							icon: "error",
							title: "Error!",
							text: res.result.message
						});
					}
					else{
						if(actionOverride){
							actionOverrideFunction(answer, res);
						}
						else{
							if(res.result.correct){
								Swal.fire({
									icon: "success",
									title: "Correct!",
									text: res.result.message
								}).then(()=> {
									if(res.result.data.action == "redirect"){
										window.location.href = res.result.data.data;
									}
									else if(res.result.data.action == "message"){
										Swal.fire({
											icon: "info",
											text: res.result.data.data
										});
									}
								});
							}
							else{
								Swal.fire({
									icon: "error",
									title: "Incorrect!",
									text: res.result.message
								});
							}
						}
						
					}
				},
				error: function(err){
					Swal.fire({
						icon: "error",
						title: "Error!",
						text: "There was a problem contacting the control server."
					});
				}
			})
			console.log(answer);
		});
	}
	
	
})