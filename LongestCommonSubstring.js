function createMatrixString(rows, columns){
    let matrix = new Array(columns);
    
    for (var i = 0; i < rows; i++){
          matrix[i] = new Array(rows);
          for(var j = 0; j < columns; j++){
            matrix[i][j] = 0;
          }
    }
    
    return matrix;
  }
  
  function returnMax(str1,str2,matrix){
    
    let max = 0;
    
    if(str1 == str2){
      return str1.length;
    }
    
    for(row = 0; row < str2.length; row++){
      
      for(column = 0; column < str1.length; column++){
        
        if(str2[row] == str1[column]){
          
          if(row == 0 || column == 0){
            
            matrix[row][column]++;
            
            if(matrix[row][column] > max){
              max = matrix[row][column];
            }
          }
          else {
            matrix[row][column] = matrix[row-1][column-1] + 1;
            
            if(matrix[row][column] > max){
              max = matrix[row][column];
            }
          }
        } 
      }
    }
    return max;
  }
  
  var str1 = "Enter the first string";   
  var str2 = "Enter the second string";

    
  let rows = str2.length;
  let columns = str1.length;
  let matrix = createMatrixString(rows,columns);
  let max = returnMax(str1, str2, matrix);
     
  console.log(max);
    

  
  