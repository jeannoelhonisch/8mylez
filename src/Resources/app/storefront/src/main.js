// Import all necessary Storefront plugins
import SearchPlugin from './search-plugin/search-plugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('SearchPlugin', SearchPlugin);
