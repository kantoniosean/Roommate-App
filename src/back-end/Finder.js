import React from 'react'

class Finder {

  // Sorts the list of all users from smallest difference in score to largest.
  // cur = current users
  function getPerferedUsers(cur) {
    preffered = users;  // List of All users

      function sub(u2) {
          return Math.abs(cur.getScore()-u2.getScore());
      }

      function swap(items, leftIndex, rightIndex){
          var temp = items[leftIndex];
          items[leftIndex] = items[rightIndex];
          items[rightIndex] = temp;
      }
      function partition(items, left, right) {
          var pivot   = items[Math.floor((right + left) / 2)], //middle element
              i       = left, //left pointer
              j       = right; //right pointer
          while (i <= j) {
              while (sub(items[i]) < sub(pivot)) {
                  i++;
              }
              while (sub(items[j]) > sub(pivot)) {
                  j--;
              }
              if (i <= j) {
                  swap(items, i, j); //sawpping two elements
                  i++;
                  j--;
              }
          }
          return i;
      }

      function quickSort(items, left, right) {
          var index;
          if (items.length > 1) {
              index = partition(items, left, right); //index returned from partition
              if (left < index - 1) { //more elements on the left side of the pivot
                  quickSort(items, left, index - 1);
              }
              if (index < right) { //more elements on the right side of the pivot
                  quickSort(items, index, right);
              }
          }
          return items;
      }

      return quickSort(preffered, 0, preffered.length-1);

  }
}

export default Finder
