package no.nav.pensjon.dsf.web.resources.person;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("api/person/{fnr}")
public class PersonEndpoint {

    @RequestMapping(method = RequestMethod.GET)
    public String findOne(@PathVariable String fnr) {
        return fnr;
    }

}
