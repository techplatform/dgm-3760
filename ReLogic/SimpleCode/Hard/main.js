var theQs = [
    {
        qns: "1. Which function is used to serialize an object into a JSON string in Javascript?",
        ans: {
            a: 'stringify()',
            b: 'parse()',
            c: 'convert()',
            d: 'None of the above'
        },
        rightAns: 'a'
    },
    {
        qns: "2. How to stop an interval timer in Javascript?",
        ans: {
            a: 'clearInterval',
            b: 'clearTimer',
            c: 'intervalOver',
            d: 'None of the above'
        },
        rightAns: 'a'
    },
    {
        qns: "3. Which of the following are not server-side Javascript objects?",
        ans: {
            a: 'Date',
            b: 'FileUpload',
            c: 'Function',
            d: 'All of the above'
        },
        rightAns: 'd'
    }
];
var qzContainer = document.getElementById('qz');
var ansContainer = document.getElementById('ans');
var subBtn = document.getElementById('sub');

disQuiz(theQs, qzContainer, ansContainer, subBtn);

function disQuiz(qcontainer, qzContainer, ansContainer, subBtn){

	function disQns(qcontainer, qzContainer){
		var result = [];
		var ans;

		for(var i=0; i<qcontainer.length; i++){
			
			ans = [];

			for(letter in qcontainer[i].ans){

				ans.push(
					'<label>'
						+ '<input type="radio" name="qns'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ qcontainer[i].ans[letter]
					+ '</label>'
				);
			}

			result.push(
				'<div class="qns">' + qcontainer[i].qns + '</div>'
				+ '<div class="ans">' + ans.join('') + '</div>'
			);
		}

		qzContainer.innerHTML = result.join('');
	}


	function showResults(qcontainer, qzContainer, ansContainer){
		
		var ansContainers = qzContainer.querySelectorAll('.ans');
		
		var userAns = '';
		var numCorrect = 0;
		
		for(var i=0; i<qcontainer.length; i++){

			userAns = (ansContainers[i].querySelector('input[name=qns'+i+']:checked')||{}).value;
			
			if(userAns===qcontainer[i].rightAns){
				numCorrect++;
				
				ansContainers[i].style.color = 'lightgreen';
			}
			else{
				ansContainers[i].style.color = 'red';
			}
		}

		ansContainer.innerHTML = numCorrect + ' out of ' + qcontainer.length;
	}

	disQns(qcontainer, qzContainer);
	
	subBtn.onclick = function(){
		showResults(qcontainer, qzContainer, ansContainer);
	}

}