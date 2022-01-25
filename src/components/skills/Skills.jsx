import React from "react";
import "./skills.css";

function Skills() {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img
						src="https://images.squarespace-cdn.com/content/v1/56acc1138a65e2a286012c54/1616683087242-1ZYGD8DPHJRCHDLPUSWL/artificial-intelligence-4389372_1920.jpg?format=1500w"
						alt=""
						className="a-img"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">My Skills</h1>
				<p className="a-sub">
					Its incredible when skills and passion come together!!
				</p>
				<div className="a-skills">
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/128709937-80b78fc4-841e-4bbc-8f4a-3f8592046c54.png"
							alt=""
							className="s-icon"
						/>
					</div>
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/128710950-34252cb3-522d-4569-875d-dc68dfb74252.png"
							alt=""
							className="s-icon"
						/>
					</div>
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/128710962-5372835b-407a-402a-93f7-9329ed63fc3a.png"
							alt=""
							className="s-icon"
						/>
					</div>
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/134500377-2edfb07d-2569-4d3b-91b7-e979413edae1.png"
							alt=""
							className="s-icon"
						/>
					</div>
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/129219911-34575cf1-2db8-4132-97ba-bbf3d6f65390.png"
							alt=""
							className="s-icon"
						/>
					</div>
					<div className="a-skills-items">
						<img
							src="https://user-images.githubusercontent.com/85919501/128709934-f2d29318-a21a-4507-b398-757511dcd70e.png"
							alt=""
							className="s-icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
