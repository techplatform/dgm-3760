var theQs = [
    {
        qns: "1. Logx (1 / 8) = - 3 / 2?",
        ans: {
            a: '-4',
            b: '4',
            c: '1/4',
            d: '10'
        },
        rightAns: 'b'
    },
    {
        qns: "2. Log 4 (x) = 12, then log 2 (x / 4)",
        ans: {
            a: '3',
            b: '5',
            c: '10',
            d: '24'
        },
        rightAns: 'd'
    },
    {
        qns: "3. For x greater than or equal to zero and less than or equal to 2 π, sin x and cos x are both decreasing on the intervals?",
        ans: {
            a: '(0 , π/2)',
            b: '(π/2 , π)',
            c: '(π , 3 π / 2)',
            d: '(3 π / 2 , 2 π)'
        },
        rightAns: 'b'
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