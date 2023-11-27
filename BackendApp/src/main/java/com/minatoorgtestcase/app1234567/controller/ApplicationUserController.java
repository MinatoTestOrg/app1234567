package com.minatoorgtestcase.app1234567.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import com.vs.rappit.base.logger.Logger;
import com.vs.rappit.base.logger.LoggerFactory;
import com.vs.rappit.base.factory.InstanceFactory;
import com.minatoorgtestcase.app1234567.base.controller.ApplicationUserBaseController;
import com.minatoorgtestcase.app1234567.service.IApplicationUserService;
import com.minatoorgtestcase.app1234567.service.ApplicationUserService;
import com.minatoorgtestcase.app1234567.model.ApplicationUser;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@RequestMapping(path = "/rest/applicationusers/", produces = "application/json")
public class ApplicationUserController extends ApplicationUserBaseController<IApplicationUserService<ApplicationUser>, ApplicationUser> {

	public ApplicationUserController(ApplicationUserService applicationUserService) {
		super(applicationUserService);
	}
	
		
	
	
}
