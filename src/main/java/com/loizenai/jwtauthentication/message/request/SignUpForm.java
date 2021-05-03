package com.loizenai.jwtauthentication.message.request;

import java.util.Set;

import javax.validation.constraints.*;


public class SignUpForm {
    @NotBlank
    @Size(min = 3, max = 50)
    private String nom;
    
    @NotBlank
    @Size(min = 3, max = 50)
    private String prenom;

    @NotBlank
    @Size(min = 3, max = 50)
    private String cin;

    @NotBlank
    @Size(max = 60)
    @Email
    private String email;
    
    private Set<String> role;
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    private int age;
    private String adresse;
    private String sexe;
    
    
    public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String ville;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRole() {
    	return this.role;
    }
    
    public void setRole(Set<String> role) {
    	this.role = role;
    }

	
    
}