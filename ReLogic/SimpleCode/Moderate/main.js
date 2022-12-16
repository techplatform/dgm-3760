var theQs = [
    {
        qns: "1. Javascript is an _______ language?",
        ans: {
            a: 'Object-Oriented',
            b: 'Object-Based',
            c: 'Procedural',
            d: 'None of the above'
        },
        rightAns: 'a'
    },
    {
        qns: "2. Which of the following keywords is used to define a variable in Javascript?",
        ans: {
            a: 'var',
            b: 'let',
            c: 'Both A and B',
            d: 'None of the above'
        },
        rightAns: 'c'
    },
    {
        qns: "3. Which of the following methods is used to access HTML elements using Javascript?",
        ans: {
            a: 'getElementId()',
            b: 'getElementByClassName()',
            c: 'Both A and B',
            d: 'None of the above'
        },
        rightAns: 'c'
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