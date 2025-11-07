		function submitFilter() {  
		    // 获取筛选条件  
		    const year = document.getElementById('yearSelect').value;  
		    const category = document.getElementById('categorySelect').value;  
		    const type = document.getElementById('typeSelect').value;  
		  
		    // 筛选数据  
		    function matchesCategory(objCategory, inputCategory) {    
		        if (inputCategory == 'αβ') {    
		            // 当输入为'αβ'时，总是返回true，表示匹配所有category    
		            return true;    
		        } else if (inputCategory == 'α') {    
		            return objCategory == 'α' || objCategory == 'αβ';    
		        } else if (inputCategory == 'β') {    
		            return objCategory == 'β' || objCategory == 'αβ';    
		        } else {    
		            return objCategory == inputCategory;    
		        }    
		    }    
		      
		    const filteredData = mockData.filter(obj => {  
		        // 如果type为'DT'，则只返回type为'DT'的数据  
		        if (type === 'DT') {  
		            return obj.type === 'DT';  
		        }  
		        // 如果type不为'DT'，则返回满足其他条件的数据（且type不为'DT'）  
		        return (year === 'all' || obj.year === year) &&  
		               matchesCategory(obj.category, category) &&  
		               ((obj.type === type || obj.type === 'location') || type === 'all');  
		    });
			const nandata = `<h4>没有数据捏</h4>
<p>数据还没更新到这里，敬请期待</p>`;
		    // 输出筛选结果到控制台  
			var problem = ``;
			for(i = 0; i < filteredData.length; i++){
				if (filteredData[i].type == 'location') {
					problem += `<div class="location"> <h3> ${filteredData[i].name} </h3> <div class="locinfo"><p> ${filteredData[i].content1} </p></div><div class="seperator"> </div><div class="locinfo"><p> ${filteredData[i].content2} </p> </div></div>`;
				} else {
					problem += `<h4> ${filteredData[i].name} [${filteredData[i].year} ${filteredData[i].type} ${filteredData[i].category}]</h4> <p> 英：${filteredData[i].content1} </p> <p> 中：${filteredData[i].content2} </p>`;
				}
			}
		    // 更新页面元素（确保页面上有ID为'quiz'的元素） 
			if (filteredData.length == 0) {
				document.getElementById('quiz').innerHTML = nandata;
			} else{
				document.getElementById('quiz').innerHTML = problem;
			} // 这只是示例，通常您可能会显示筛选后的数据  
		}  
		  
		// 确保将submitFilter函数绑定到按钮的点击事件（这里假设按钮的ID是'filterButton'）  
		document.getElementById('filterButton').addEventListener('click', submitFilter);