import React from 'react'
import './choreliststyle.css'
import './font-awesome.css'


function ChoreList() {

    return (
        <>
        <meta charset="UTF-8" />
                <title>Chore List</title>
                <body>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web" />
                <div class="container">
                    <div class="header">
                    <div>
                        <p style ="position:relative;top:125px;left:0px;font-size:25px;text-align:center;"><strong>CHORES LIST</strong></p>
                    </div>
                        <div class="clear">
                        <i class="fa fa-refresh"></i>
                    </div>
                    <div id="date"></div>
                </div>
                <div class="content">
                    <ul id="list">
                        <li class="item">
                            <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                            <p class="text">sample chore</p>
                            <i class="fa fa-trash-o de" job="delete" id="0"></i>
                        </li>
                    </ul>
                </div>
                <div class="add-to-do">
                    <i class="fa fa-plus-circle"></i>
                    <input type="text" id="input" placeholder="add a chore" />
                </div>
            </div>
            <script src="/app.js"></script>
            </body>
        </>
    )
    
}

export default ChoreList