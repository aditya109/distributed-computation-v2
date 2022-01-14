# distributed-computation-v2
Distributed computing with deadline-footprinting functionality in Spring Boot server acting as Rest Client (as Master) and gRPC Server (as Workers)

- `grpc-server` - 

  | Component    | Function                                                     |      |
  | ------------ | ------------------------------------------------------------ | ---- |
  | `engine`     | `AddBlock` - <br />Takes a list of long integers and adds them, returning a list of long integers. |      |
  |              | `MultBlock` - <br />Takes 2 lists of long integers (row and column), multiplies elements at corresponding indices and adds them, returning a list of long integers |      |
  | `helper`     | `FreePortFinder` - <br />Finds a freely available port.      |      |
  | `middleware` | `LoggerProvider`- <br />Provides an configured logger object. |      |
  | `services`   | `ComputeService` > `multiplyRowByColumn`                     |      |
  | `stubs`      |                                                              |      |
  | server       |                                                              |      |
  |              |                                                              |      |

  

- `rest-server` - 
