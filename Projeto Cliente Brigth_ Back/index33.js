<ref *2> Connection {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  config: ConnectionConfig {
    host: '157.90.238.176',
    port: 3306,
    localAddress: undefined,
    socketPath: undefined,
    user: 'root',
    password: 'poMY9zHgbaN9Aier',
    database: 'servicos',
    connectTimeout: 10000,
    insecureAuth: false,
    supportBigNumbers: false,
    bigNumberStrings: false,
    dateStrings: false,
    debug: undefined,
    trace: true,
    stringifyObjects: false,
    timezone: 'local',
    flags: '',
    queryFormat: undefined,
    pool: undefined,
    ssl: false,
    localInfile: true,
    multipleStatements: false,
    typeCast: true,
    maxPacketSize: 0,
    charsetNumber: 33,
    clientFlags: 455631,
    protocol41: true
  },
  _socket: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _events: {
      close: undefined,
      error: [Function: bound ],
      prefinish: undefined,
      finish: undefined,
      drain: undefined,
      data: [Function (anonymous)],
      end: [Array],
      readable: undefined,
      connect: [Function: bound ],
      timeout: undefined
    },
    _readableState: ReadableState {
      highWaterMark: 16384,
      buffer: [],
      bufferIndex: 0,
      length: 0,
      pipes: [],
      awaitDrainWriters: null,
      [Symbol(kState)]: 194519300
    },
    _writableState: WritableState {
      highWaterMark: 16384,
      length: 0,
      corked: 0,
      onwrite: [Function: bound onwrite],
      writelen: 0,
      bufferedIndex: 0,
      pendingcb: 0,
      [Symbol(kState)]: 17563908,
      [Symbol(kBufferedValue)]: null
    },
    allowHalfOpen: false,
    _maxListeners: undefined,
    _eventsCount: 4,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: null,
    _server: null,
    timeout: 0,
    [Symbol(async_id_symbol)]: 48,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: -1,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 35816,
      _onTimeout: null,
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: true,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 51,
      [Symbol(triggerId)]: 46
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(shapeMode)]: true,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: false,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _protocol: Protocol {
    _events: [Object: null prototype] {
      data: [Function (anonymous)],
      end: [Array],
      handshake: [Function: bound _handleProtocolHandshake],
      initialize: [Function: bound _handleProtocolInitialize],
      unhandledError: [Function: bound ],
      drain: [Function: bound ],
      enqueue: [Function: bound _handleProtocolEnqueue]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    readable: true,
    writable: true,
    _config: ConnectionConfig {
      host: '157.90.238.176',
      port: 3306,
      localAddress: undefined,
      socketPath: undefined,
      user: 'root',
      password: 'poMY9zHgbaN9Aier',
      database: 'servicos',
      connectTimeout: 10000,
      insecureAuth: false,
      supportBigNumbers: false,
      bigNumberStrings: false,
      dateStrings: false,
      debug: undefined,
      trace: true,
      stringifyObjects: false,
      timezone: 'local',
      flags: '',
      queryFormat: undefined,
      pool: undefined,
      ssl: false,
      localInfile: true,
      multipleStatements: false,
      typeCast: true,
      maxPacketSize: 0,
      charsetNumber: 33,
      clientFlags: 455631,
      protocol41: true
    },
    _connection: [Circular *2],
    _callback: null,
    _fatalError: null,
    _quitSequence: null,
    _handshake: true,
    _handshaked: false,
    _ended: false,
    _destroyed: false,
    _queue: [ [Handshake], [Query] ],
    _handshakeInitializationPacket: HandshakeInitializationPacket {
      protocolVersion: 10,
      serverVersion: '8.0.33-25',
      threadId: 46247,
      scrambleBuff1: <Buffer 11 79 6e 3f 07 15 0b 36>,
      filler1: <Buffer 00>,
      serverCapabilities1: 65535,
      serverLanguage: 45,
      serverStatus: 2,
      serverCapabilities2: 57343,
      scrambleLength: 21,
      filler2: <Buffer 00 00 00 00 00 00 00 00 00 00>,
      scrambleBuff2: <Buffer 2d 65 5f 33 4d 49 57 30 49 52 30 14>,
      filler3: <Buffer 00>,
      pluginData: 'mysql_native_password',
      protocol41: true
    },
    _parser: Parser {
      _supportBigNumbers: false,
      _buffer: <Buffer 07 00 00 02 00 00 00 02 00 00 00>,
      _nextBuffers: [BufferList],
      _longPacketBuffers: [BufferList],
      _offset: 11,
      _packetEnd: 11,
      _packetHeader: [PacketHeader],
      _packetOffset: 4,
      _onError: [Function: bound handleParserError],
      _onPacket: [Function: bound ],
      _nextPacketNumber: 3,
      _encoding: 'utf-8',
      _paused: false
    },
    [Symbol(shapeMode)]: false,
    [Symbol(kCapture)]: false
  },
  _connectCalled: true,
  state: 'connected',
  threadId: 46247,
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
}
[
  RowDataPacket { nome: 'ELTNTNXA' },
  RowDataPacket { nome: 'GRVLTNXA' },
  RowDataPacket { nome: 'JHCYTNEH' },
  RowDataPacket { nome: 'JHCYTNXA' },
  RowDataPacket { nome: 'JHCYTNXC' },
  RowDataPacket { nome: 'JHCYTNXH' }
]