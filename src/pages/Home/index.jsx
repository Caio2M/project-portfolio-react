import React, { useState, useEffect } from "react";
import "./styles.css";
import { Repository } from "../../components/Card";
import iconWork from "../../img/work.png";
import iconLocation from "../../img/map-pinmapicon.png";
import iconGithub from "../../img/github.png";
import iconMail from "../../img/mailmail.png";
import iconTwitter from "../../img/twittertwitter.png";
import iconWeb from "../../img/globe.png";

export function Home() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // corpo do useEffect
    fetch("https://api.github.com/users/Caio2M")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          repos: data.public_repos,
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          local: data.location,
          email: data.email,
          twitter: data.twitter_username,
          company: data.company,
          publicRepos: data.public_repos,
          github: data.login,
          blog: data.blog,
        });

        fetch(`https://api.github.com/users/${data.login}/repos`)
          .then((response) => response.json())
          .then((result) => {
            const reposAPI = result.map((repo) => {
              return {
                title: repo.name,
                subTitle: repo.description,
                star: repo.stargazers_count,
                fork: repo.forks_count,
                language: repo.language,
                url: repo.html_url,
              };
            });
            setRepos(reposAPI);
          });
      });
  }, []);

  console.log(repos);

  return (
    <div className="page">
      <div className="container-personal-info">
        <div className="div-profile box">
          <img src={user.avatar} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>

        <div className="div-links box">
          {user.company && (
            <div className="work space">
              <img src={iconWork} alt="" />
              <p>
                <a href="#">{user.company}</a>
              </p>
            </div>
          )}

          {user.local && (
            <div className="map space">
              <img src={iconLocation} alt="" />
              <p>
                <a href="#">{user.local}</a>
              </p>
            </div>
          )}

          {user.github && (
            <div className="github space">
              <img src={iconGithub} alt="" />
              <p>
                <a href="#">{user.github}</a>
              </p>
            </div>
          )}

          {user.blog && (
            <div className="blog space">
              <img src={iconWeb} alt="" />
              <p>
                <a href={user.blog}>{user.blog.substring(0, 30) + "..."}</a>
              </p>
            </div>
          )}

          {user.email && (
            <div className="email space">
              <img src={iconMail} alt="" />
              <p>
                <a href="#">{user.email}</a>
              </p>
            </div>
          )}

          {user.twitter && (
            <div className="twitter">
              <img src={iconTwitter} alt="" />
              <p>
                <a href="#">{"@" + user.twitter}</a>
              </p>
            </div>
          )}
        </div>

        <div className="div-technologies box">
          <div className="title">
            <h2>Tecnologias</h2>
          </div>
          <div className="technologies">
            <a href="">
              <span className="techs">
                <p>JAVASCRIPT</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>REACTJS</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>NODEJS</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>GIT</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>GITHUB</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>HTML</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>CSS</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>ELIXIR</p>
              </span>
            </a>
            <a href="">
              <span className="techs">
                <p>REACT NATIVE</p>
              </span>
            </a>
          </div>
        </div>

        <div className="div-experiences box">
          <div className="title">
            <h2>Experiências</h2>
          </div>
          <div className="experience">
            <h4>Lab2dev</h4>
            <p>2022 - Atualmente <br /> Desenvolvedor</p>
          </div>
        </div>

        <div className="div-education box">
          <div className="title">
            <h2>Educação</h2>
          </div>
          <div className="education">
            <h4>ITB - Brasilio Flores de Azevedo</h4>
            <p>2020 - 2022</p>
          </div>
        </div>
      </div>

      <div className="container-repositories">
        <div className="title repositoryBox">
          <h2>My Projects</h2>
          <a 
             className="linkMainTitle" 
             href={`https://github.com/${user.github}?tab=repositories`}>
            Veja todos
          </a>
        </div>
        <div className="container-projects">
          {repos.map((r) => {
            return (
              <Repository
                title={r.title}
                subTitle={r.subTitle}
                star={r.star}
                fork={r.fork}
                language={r.language}
                url={r.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
