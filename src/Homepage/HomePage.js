import React from "react";
import homepagecss from "./Homepage.module.css";
import DoughNutChart from "../chart/douhNutChart";
const HomePage = () => {
  return (
    <div className={homepagecss.main}>
      <div className={homepagecss.navigationBar}>
        <div className={homepagecss.marginalDiv}></div>
        <div className={homepagecss.navigationSlogan1}>
          <p>Empower Your Day, Master Your Tasks</p>
        </div>
        <div className={homepagecss.navigationTitle}>
          <p>Task Achiever</p>
        </div>
        <div className={homepagecss.navigationSlogan2}>
          <p>Where productivity finds its Path</p>
          <p>A todo manager which help You in modern way</p>
        </div>
        <div className={homepagecss.sidebtn}>
          <button>sidebtn</button>
        </div>
      </div>

      <div className={homepagecss.todoContainer}>
        <div className={homepagecss.todoProgressBar}>
          <div className={homepagecss.todoProgressCategoryContainer}>
            <div className={homepagecss.todoProgressUserName}>shivam singh</div>
            <div className={homepagecss.todoProgressDetails}>
              <div className={homepagecss.todoProgressCardContainer}>
                {" "}
                <div className={homepagecss.todoProgressDetailsCard}>
                  total
                </div>
                <div className={homepagecss.todoProgressDetailsCard}>
                  in-Progress
                </div>
                <div className={homepagecss.todoProgressDetailsCard}>
                  completed 
                </div>
                <div className={homepagecss.todoProgressDetailsCard}>
                  expired
                </div>
              </div>

              <div className={homepagecss.todoProgressDetailChart}><DoughNutChart></DoughNutChart></div>
            </div>
            
          </div>
        </div>
        <div className={homepagecss.todoCategoriesContainer}>
          {" "}
          <div className={homepagecss.todoCategories}>
            <div className={homepagecss.categoryTitle}>All Saved Todo</div>
            <div className={homepagecss.categoryTitle}>Todays Todo</div>
            <div className={homepagecss.categoryTitle}>Upcoming Todo</div>
            <div className={homepagecss.categoryTitle}>Completed Todo</div>

            <div className={homepagecss.categoryTitle}>Deleted Todo</div>
          </div>
        </div>

        <div className={homepagecss.AlltodoList}>
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>{" "}
          <div className={homepagecss.todoCard}>
            <div className={homepagecss.todoCardTitle}>
              complete thisssss work in 30 dayss
            </div>
            <div className={homepagecss.todoCardTime}>remaining:</div>
          </div>
          {/* <div className={homepagecss.todoCard}>second todo</div>
          <div className={homepagecss.todoCard}>first todo</div>
          <div className={homepagecss.todoCard}>second todo</div>
          <div className={homepagecss.todoCard}>first todo</div>
          <div className={homepagecss.todoCard}>second todo</div>
          <div className={homepagecss.todoCard}>first todo</div>
          <div className={homepagecss.todoCard}>second todo</div>
          <div className={homepagecss.todoCard}>first todo</div>
          <div className={homepagecss.todoCard}>second todo</div>
          <div className={homepagecss.todoCard}>first todo</div>
          <div className={homepagecss.todoCard}>second todo</div> */}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
