searchState.loadedDescShard("pharos", 0, "pharos\nA channel with a limited message queue (the usize …\nChoose the type of channel that will be used for your …\nThe pharos object is already closed. You can no longer …\nA boxed closure to a predicate to filter events.\nThe error type that is returned if observing is not …\nThe error type that is returned if observing is not …\nThe different kind of errors that can happen when you use …\nA stream of events. This is returned from …\nPredicate for filtering events.\nThe minimum valid buffer size for <code>Channel::Bounded</code> is <code>1</code>, …\nIndicate that a type is observable. You can call <code>observe</code> …\nLike Observable, but the future returned is not <code>Send</code>, thus …\nA pinned boxed future returned by the Observable::observe …\nConfiguration for your event stream.\nA pinned boxed future returned by the …\nThe error type for errors happening in <code>pharos</code>.\nThe Pharos lighthouse. When you implement Observable on …\nA function pointer to a predicate to filter events.\nA handy wrapper that uses a futures aware mutex to allow …\nA channel with unbounded capacity. Note that this may lead …\nThis enum might grow in the future, thanks to this that won…\nChoose which channel implementation to use for your event …\nDisconnect from the observable object. This way the sender …\nFilter your event stream with a predicate that is a fn …\nFilter your event stream with a predicate that is a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIdentify which error happened.\nCreate a new Pharos. May it’s light guide you to safe …\nCreate a SharedPharos object.\nNotify observers.\nReturns the number of actual observers that are still …\nAdd an observer to the observable. Options allow chosing …\nWill re-use slots from disconnected observers to avoid …\nAdd an observer to the observable. Options allow chosing …\nStart Observing this Pharos object.\nWill close and drop all observers.\nReturns the size of the vector used to store the …")