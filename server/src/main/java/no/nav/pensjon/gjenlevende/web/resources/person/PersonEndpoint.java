package no.nav.pensjon.gjenlevende.web.resources.person;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("api/public/person/{fnr}")
public class PersonEndpoint {

    static Map<String, Person> db= new HashMap<>();

    public PersonEndpoint(){
        db.put("08125368761",new Person("Johnny B.", "Good", "USA", "11111978", "08125368761", "Denne må skjules" ) );
        db.put("11124559972",new Person("Annnnna", "Lovinda", "Norge", "11111978", "11124559972", "12121998"  ) );

    }

    @RequestMapping(method = RequestMethod.GET)
    public Person findOne(@PathVariable String fnr) {
        return db.get(fnr);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/adresse")
    public String finnAdress(@PathVariable String fnr) {
        return "Sannergata 2";
    }

    static class Person{
        String fornavn;
        String etternavn;
        String statsborgerskap;
        String vielsesdato;
        String fodseslsnummer;
        String dodsdato;

        public Person(String fornavn, String etternavn, String statsborgerskap, String vielsesdato, String fodseslsnummer, String dodsdato) {
            this.fornavn = fornavn;
            this.etternavn = etternavn;
            this.statsborgerskap = statsborgerskap;
            this.vielsesdato = vielsesdato;
            this.fodseslsnummer = fodseslsnummer;
            this.dodsdato = dodsdato;
        }

        public String getFornavn() {
            return fornavn;
        }

        public String getEtternavn() {
            return etternavn;
        }

        public String getStatsborgerskap() {
            return statsborgerskap;
        }

        public String getVielsesdato() {
            return vielsesdato;
        }

        public String getFodseslsnummer() {
            return fodseslsnummer;
        }

        public String getDodsdato() {
            return dodsdato;
        }
    }

}
