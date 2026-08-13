-- Schema database MySQL untuk portfolio
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(180) UNIQUE NOT NULL,
  description TEXT,
  tech_stack VARCHAR(255),
  project_url VARCHAR(255),
  image_url VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('unread','read','replied') DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  category VARCHAR(80),
  level TINYINT UNSIGNED DEFAULT 50
);

INSERT INTO projects(title,slug,description,tech_stack,featured) VALUES
('Temuap — Digital Brand','temuap-digital-brand','Landing page modern untuk brand.','HTML,CSS,JavaScript',1),
('Network Dashboard','network-dashboard','Dashboard monitoring jaringan.','React,API,UI/UX',1),
('Portfolio OS','portfolio-os','Portfolio developer modern.','Next.js,Design,Database',1);

INSERT INTO skills(name,category,level) VALUES
('HTML5','Frontend',90),('CSS3','Frontend',88),('JavaScript','Frontend',82),
('React','Frontend',75),('Node.js','Backend',65),('MySQL','Database',65);
