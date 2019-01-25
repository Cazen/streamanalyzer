package app.metatron.streamanalyzer.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.codahale.metrics.annotation.Timed;
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


/**
 * REST controller for managing the kubernetes cluster(for flink) lifecycle.
 */
@RestController
@RequestMapping("/k8scluster")
public class K8SClusterResource {
    private final Logger log = LoggerFactory.getLogger(K8SClusterResource.class);

    public K8SClusterResource() {}

    /**
     * @return a list of the all Flink cluster
     */
    @GetMapping("/getClusterList")
    @Timed
    public ResponseEntity<List<String>> getClusterList() {
        List<String> returnList = new ArrayList<>();
        returnList.add("test1");
        returnList.add("test2");

        return new ResponseEntity<>(returnList, HttpStatus.OK);
    }
}
