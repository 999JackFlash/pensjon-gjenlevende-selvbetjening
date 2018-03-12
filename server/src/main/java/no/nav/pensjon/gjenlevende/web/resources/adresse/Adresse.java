package no.nav.pensjon.gjenlevende.web.resources.adresse;

import no.nav.pensjon.gjenlevende.web.resources.Ressurser;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by H141598 on 23.02.2018.
 */

@RestController
@RequestMapping(Ressurser.ADRESSE + "/{fnr}")
public class Adresse {

    @RequestMapping(method = RequestMethod.GET)
    public String finnAdress(@PathVariable String fnr) {
        return "jalla 3";
    }
}
