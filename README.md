# JHipster generated kubernetes configuration

## Preparation

You will need to push your image to a registry. If you have not done so, use the following commands to tag and push the images:

```
$ docker image tag streamanalyzer streamanalyzer/applicationmanager/streamanalyzer
$ docker push streamanalyzer/applicationmanager/streamanalyzer
```

## Deployment

You can deploy all your apps by running the below bash command:

```
./kubectl-apply.sh
```

## Exploring your services

Use these commands to find your application's IP addresses:

```
$ kubectl get svc streamanalyzer -n stream-analyzer
```

## Scaling your deployments

You can scale your apps using

```
$ kubectl scale deployment <app-name> --replicas <replica-count> -n stream-analyzer
```

## zero-downtime deployments

The default way to update a running app in kubernetes, is to deploy a new image tag to your docker registry and then deploy it using

```
$ kubectl set image deployment/<app-name>-app <app-name>=<new-image>  -n stream-analyzer
```

Using livenessProbes and readinessProbe allows you to tell kubernetes about the state of your apps, in order to ensure availablity of your services. You will need minimum 2 replicas for every app deployment, you want to have zero-downtime deployed. This is because the rolling upgrade strategy first kills a running replica in order to place a new. Running only one replica, will cause a short downtime during upgrades.

## Monitoring tools

### Prometheus metrics

Generator is also packaged with [Prometheus operator by CoreOS](https://github.com/coreos/prometheus-operator).

**hint**: use must build your apps with `prometheus` profile active!

Application metrics can be explored in Prometheus through,

```
$ kubectl get svc jhipster-prometheus -n stream-analyzer
```

Also the visualisation can be explored in Grafana which is pre-configured with a dashboard view. You can find the service details by

```
$ kubectl get svc jhipster-grafana -n stream-analyzer
```

-   If you have chosen _Ingress_, then you should be able to access Grafana using the given ingress domain.
-   If you have chosen _NodePort_, then point your browser to an IP of any of your nodes and use the node port described in the output.
-   If you have chosen _LoadBalancer_, then use the IaaS provided LB IP

## Troubleshooting

> my apps doesn't get pulled, because of 'imagePullBackof'

check the registry your kubernetes cluster is accessing. If you are using a private registry, you should add it to your namespace by `kubectl create secret docker-registry` (check the [docs](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) for more info)

> my apps get killed, before they can boot up

This can occur, if your cluster has low resource (e.g. Minikube). Increase the `initialDelySeconds` value of livenessProbe of your deployments

> my apps are starting very slow, despite I have a cluster with many resources

The default setting are optimized for middle scale clusters. You are free to increase the JAVA_OPTS environment variable, and resource requests and limits to improve the performance. Be careful!

> I have selected prometheus but no targets are visible

This depends on the setup of prometheus operator and the access control policies in your cluster. Version 1.6.0+ is needed for the RBAC setup to work.

> I have selected prometheus, but my targets never get scraped

This means your apps are probably not built using the `prometheus` profile in Maven/Gradle

> my SQL based microservice stuck during liquibase initialization when running multiple replicas

Sometimes the database changelog lock gets corrupted. You will need to connect to the database using `kubectl exec -it` and remove all lines of liquibases `databasechangeloglock` table.
