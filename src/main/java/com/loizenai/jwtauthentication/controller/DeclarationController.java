package com.loizenai.jwtauthentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loizenai.jwtauthentication.model.Declaration;
import com.loizenai.jwtauthentication.model.Patient;
import com.loizenai.jwtauthentication.repository.DeclarationRepository;
import com.loizenai.jwtauthentication.repository.PatientRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class DeclarationController {
	@Autowired
	private DeclarationRepository declaration;
	@PostMapping("/declarations")
	public String savePatient(@RequestBody Declaration declarat) {
		
	      declaration.save(declarat);
		return "added patient with name: "+declarat.getCin();
		
	}
}
