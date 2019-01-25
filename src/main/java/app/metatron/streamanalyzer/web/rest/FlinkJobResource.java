package app.metatron.streamanalyzer.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing the Apache Flink job's life cycle.
 */
@RestController
@RequestMapping("/flink")
public class FlinkJobResource {
    private final Logger log = LoggerFactory.getLogger(FlinkJobResource.class);


}
